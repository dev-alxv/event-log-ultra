import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

import { IEventDescription } from '../../interfaces/descriptions/event/description';
import { ApiEndpointMockResponse } from './endpoint-mock.response';

@Injectable({
  providedIn: 'root',
})
export class EventApiService {

  constructor(
    private http: HttpClient
  ) { }

  public getEventCollection(): Observable<IEventDescription[]> {

    return of(ApiEndpointMockResponse)
      .pipe(
        delay(1000) // For some loading effect
      );
  }
}
