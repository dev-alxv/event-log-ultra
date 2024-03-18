import { TestBed } from '@angular/core/testing';
import { EventDataService } from 'src/app/data/data-services/event/event-data.service';
import { EventStore } from '../../event/event.store';
import { EventService } from './event.service';

describe('EventService', () => {
  let eventService: EventService;
  let eventStore: EventStore;
  let eventDataService: EventDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EventService,
        { provide: EventStore, useValue: {} },
        { provide: EventDataService, useValue: {} }
      ]
    });
    eventService = TestBed.inject(EventService);
    eventStore = TestBed.inject(EventStore);
    eventDataService = TestBed.inject(EventDataService);
  });

  it('should be created', () => {
    expect(eventService).toBeTruthy();
  });
});
