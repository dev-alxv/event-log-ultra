import { Injectable } from '@angular/core';

import { IEventStoreInteractAction } from '../../interfaces/store/event/interact.actions';
import { Event } from '../../models/Event/event.model';
import { Store } from '../base/base.store';
import { EventState } from './event.state';

@Injectable({
  providedIn: 'root',
})
export class EventStore extends Store<EventState> {
  constructor() {
    super(new EventState());
  }

  private updateCollection(collection: Event[]): void {
    this.setState({
      ...this.state,
      collection: collection.length ? collection : this.state.collection,
    });
  }

  /**
   *
   * @param action : { action: '' }
   * @param eventCollection : { Event[] }
   */
  public dispatchAction(data: IEventStoreInteractAction): void {

    switch (data.action) {

      case 'UPDATE_EVENT_COLLECTION':
        data.eventCollection ? this.updateCollection(data.eventCollection) : this.updateCollection([] as Event[]);
        break;
    }
  }
}
