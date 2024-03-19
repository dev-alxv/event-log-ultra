import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { IEventDescription } from '../../interfaces/descriptions/event/description';
import { EventApiService } from './event-api.service';

describe('EventApiService', () => {
  let service: EventApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EventApiService],
    });
    service = TestBed.inject(EventApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should retrieve event collection', () => {
    const mockEvents: IEventDescription[] = [
      {
        timestamp: '2021-01-01T00:00:00Z',
        level: 'ERROR',
        message: 'This is event 1',
      },
      {
        timestamp: '2021-01-01T00:00:00Z',
        level: 'WARNING',
        message: 'This is event 2',
      }
    ];

    service.getEventCollection().subscribe((events) => {
      expect(events).toEqual(mockEvents);
    });
  });
});
