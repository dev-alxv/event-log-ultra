import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { map } from 'rxjs';

import { EventState } from 'src/app/domain/+store/event/event.state';
import { EventStore } from 'src/app/domain/+store/event/event.store';
import { IEventTimelineDate } from 'src/app/domain/interfaces/event/event.interfaces';
import { Event } from 'src/app/domain/models/Event/event.model';
import { isDefined } from 'src/app/utils/utils';

@UntilDestroy()

@Component({
  selector: 'event-log-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  public eventCollection: Event[];

  public periodStart: Date;
  public periodEnd: Date;

  @Input() public eventHoverIdInput: string;
  @Output() public eventHoverIdEventOutput: EventEmitter<string>;

  constructor(
    private eventStore: EventStore
  ) {
    // Init properties
    this.eventCollection = [];
    this.periodStart = new Date();
    this.periodEnd = new Date();
    this.eventHoverIdInput = '';
    this.eventHoverIdEventOutput = new EventEmitter();
  }

  public ngOnInit(): void {

    // Get Event collection
    this.eventStore.stateStream$
      .pipe(
        untilDestroyed(this),
        map((state: EventState) => this.parseTimelineData(state.collection))
      ).subscribe({
        next: (response: Event[]) => this.eventCollection = response
      });
  }

  public onHoverEvent(id: string): void {
    this.eventHoverIdEventOutput.emit(id);
  }

  public onHoverOutEvent(): void {
    this.eventHoverIdEventOutput.emit('');
  }

  private parseTimelineData(eventCollection: Event[] | undefined): Event[] {

    const collection: Event[] = [];

    // Calc event timeline position
    if (isDefined(eventCollection) && eventCollection?.length) {

      const [startPoint, endpoint] = this.calcPeriodRange(eventCollection);

      const eventToTimelinePositionRatio: number = this.calcPositionRatio(startPoint, endpoint);

      collection.push(...eventCollection.map((eventItem: Event): Event => {

        const data: IEventTimelineDate = {
          timelineRelativePosition: ((new Date(eventItem.timestamp).valueOf() - startPoint) * eventToTimelinePositionRatio).toFixed(2) + '%'
        }

        eventItem.timelineData = data;

        return eventItem
      }));
    }

    return collection;
  }

  private calcPeriodRange(eventCollection: Event[]): number[] {

    const rangePoints: number[] = [];

    // dates to milliseconds
    const range: number[] = eventCollection.map((event: Event) => {
      return new Date(event.timestamp).valueOf();
    });

    // set range points to UI
    this.periodStart = new Date(Math.min(...range));
    this.periodEnd = new Date(Math.max(...range));

    rangePoints.push(...[Math.min(...range), Math.max(...range)].sort((a, b) => a - b));

    return rangePoints;
  }

  private calcPositionRatio(startPoint: number, endpoint: number): number {
    return 100 / (endpoint - startPoint);
  }
}
