import { Injectable } from '@angular/core';

import { EventDataService } from 'src/app/data/data-services/event/event-data.service';
import { Event } from 'src/app/domain/models/Event/event.model';
import { EventStore } from '../../event/event.store';

@Injectable({
  providedIn: 'root',
})
export class EventService {

  private serviceInitialized = false;

  constructor(
    private eventStore: EventStore,
    private eventDataService: EventDataService
  ) { }

  public init(): void {
    if (!this.serviceInitialized) {
      this.serviceInitialized = true;
      this.getEventCollection();
    }
  }

  public getEventCollection(): void {

    this.eventDataService
      .listEvents()
      .subscribe({
        next: (data: Event[]) => {

          this.eventStore.dispatchAction({
            action: 'UPDATE_EVENT_COLLECTION',
            eventCollection: data
          });
        },
        error: (err: unknown) => alert('Error ' + this.constructor.name),
      });
  }
}
