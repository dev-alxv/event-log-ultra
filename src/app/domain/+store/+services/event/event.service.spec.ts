import { TestBed, fakeAsync } from '@angular/core/testing';
import { of } from 'rxjs';
import { EventDataService } from 'src/app/data/data-services/event/event-data.service';
import { IEventStoreInteractAction } from 'src/app/domain/interfaces/store/event/interact.actions';
import { Event } from 'src/app/domain/models/Event/event.model';
import { EventStore } from '../../event/event.store';
import { EventService } from './event.service';

const eventCollection: Event[] = [
  {
    id: '1',
    timestamp: new Date('2021-01-01T00:00:00Z'),
    level: 'ERROR',
    uiMessage: 'This is event 1',
    timelineData: {
      timelineRelativePosition: '55'
    }
  },
  {
    id: '2',
    timestamp: new Date('2021-01-01T00:00:00Z'),
    level: 'ERROR',
    uiMessage: 'This is event 1',
    timelineData: {
      timelineRelativePosition: '55'
    }
  }
];

describe('EventService', () => {
  let eventService: EventService;
  let eventStore: EventStore;
  let eventDataService: EventDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EventService,
        {
          provide: EventStore, useValue: {
            dispatchAction: ({ }: IEventStoreInteractAction) => { }
          }
        },
        {
          provide: EventDataService, useValue: {
            listEvents: () => of(eventCollection)
          }
        }
      ]
    });
    eventService = TestBed.inject(EventService);
    eventStore = TestBed.inject(EventStore);
    eventDataService = TestBed.inject(EventDataService);
  });

  it('should be created', () => {
    expect(eventService).toBeTruthy();
  });

  it('should initialize the service', () => {
    eventService.init();
    expect(eventService['serviceInitialized']).toBeTrue();
  });

  it('should retrieve the event collection', fakeAsync(() => {

    spyOn(eventService, 'getEventCollection');
    spyOn(eventDataService, 'listEvents').and.returnValue(of(eventCollection));
    spyOn(eventStore, 'dispatchAction');

    eventService.getEventCollection();

    expect(eventService.getEventCollection).toHaveBeenCalled;
    expect(eventDataService.listEvents).toHaveBeenCalled;

  }));
});
