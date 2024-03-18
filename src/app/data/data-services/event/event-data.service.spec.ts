import { TestBed } from '@angular/core/testing';

import { EventApiService } from '../../providers/api/event-api.service';
import { EventDataService } from './event-data.service';

describe('EventDataService', () => {
  let eventDataService: EventDataService;
  let eventApiServiceSpy: jasmine.SpyObj<EventApiService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('EventApiService', ['getEvents']);
    TestBed.configureTestingModule({
      providers: [
        EventDataService,
        { provide: EventApiService, useValue: spy }
      ]
    });
    eventDataService = TestBed.inject(EventDataService);
    eventApiServiceSpy = TestBed.inject(EventApiService) as jasmine.SpyObj<EventApiService>;
  });

  it('should be created', () => {
    expect(eventDataService).toBeTruthy();
  });
});
