import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";

import { Event } from "src/app/domain/models/Event/event.model";
import { IEventDescription } from "../../interfaces/descriptions/event/description";
import { EventApiService } from "../../providers/api/event-api.service";

@Injectable({
  providedIn: 'root',
})
export class EventDataService {

  constructor(
    private eventApi: EventApiService
  ) { }

  public listEvents(): Observable<Event[]> {

    return this.eventApi.getEventCollection()
      .pipe(
        map((response: IEventDescription[]) => this.createEventCollection(response)
        ));
  }

  private createEventCollection(collectionDescription: IEventDescription[]): Event[] {
    return collectionDescription.map((description: IEventDescription) => this.createEvent(description));
  }

  private createEvent(eventDescription: IEventDescription): Event {

    const event: Event = new Event(eventDescription);

    return event;
  }
}
