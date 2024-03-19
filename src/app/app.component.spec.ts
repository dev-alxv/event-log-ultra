import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { EventService } from './domain/+store/+services/event/event.service';
import { HeaderComponent } from './presentation/layout/header/header.component';
import { InfoTableComponent } from './presentation/layout/info-table/info-table.component';
import { LayoutComponent } from './presentation/layout/layout.component';
import { TimelineComponent } from './presentation/layout/timeline/timeline.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let eventService: EventService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        LayoutComponent,
        HeaderComponent,
        InfoTableComponent,
        TimelineComponent
      ],
      providers: [EventService],
      imports: [HttpClientTestingModule]
    }).compileComponents();

    component = TestBed.createComponent(AppComponent).componentInstance;
    eventService = TestBed.inject(EventService);
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize services on ngOnInit', () => {
    spyOn<any>(component, 'initServices');
    component.ngOnInit();
    expect(component['initServices']).toHaveBeenCalled();
  });
});
