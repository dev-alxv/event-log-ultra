import { Component, OnInit } from '@angular/core';
import { EventService } from './domain/+store/+services/event/event.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private eventService: EventService
  ) { }

  public ngOnInit(): void {
    this.initServices();
  }

  private initServices(): void {
    this.eventService.init();
  }
}
