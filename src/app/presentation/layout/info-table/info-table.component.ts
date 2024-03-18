import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { EventState } from 'src/app/domain/+store/event/event.state';

import { EventStore } from 'src/app/domain/+store/event/event.store';

@Component({
  selector: 'event-log-info-table',
  templateUrl: './info-table.component.html',
  styleUrls: ['./info-table.component.scss']
})
export class InfoTableComponent {

  public displayedColumns: string[];
  public eventStoreStream$: Observable<EventState>;

  public eventHoverId: string;

  constructor(
    private eventStore: EventStore
  ) {
    // Init event stream
    this.eventStoreStream$ = this.eventStore.stateStream$;

    // Init properties
    this.eventHoverId = '';
    this.displayedColumns = ['time', 'level', 'message'];
  }

  public eventHoverIdUpdate(id: string) {
    this.eventHoverId = id;
  }

  public onHoverRow(id: string): void {
    this.eventHoverId = id;
  }

  public onHoverOutRow(): void {
    this.eventHoverId = '';
  }

}
