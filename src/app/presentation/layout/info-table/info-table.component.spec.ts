import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { of } from 'rxjs';

import { EventState } from 'src/app/domain/+store/event/event.state';
import { EventStore } from 'src/app/domain/+store/event/event.store';
import { TimelineComponent } from '../timeline/timeline.component';
import { InfoTableComponent } from './info-table.component';

describe('InfoTableComponent', () => {
  let component: InfoTableComponent;
  let fixture: ComponentFixture<InfoTableComponent>;
  let eventStoreMock: Partial<EventStore>;

  beforeEach(async () => {
    eventStoreMock = {
      stateStream$: of({} as EventState),
    };

    await TestBed.configureTestingModule({
      declarations: [InfoTableComponent, TimelineComponent],
      imports: [
        MatProgressSpinnerModule
      ],
      providers: [
        { provide: EventStore, useValue: eventStoreMock }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update eventHoverId', () => {
    const id = '123';
    component.eventHoverIdUpdate(id);
    expect(component.eventHoverId).toEqual(id);
  });

  it('should set eventHoverId on hover row', () => {
    const id = '123';
    component.onHoverRow(id);
    expect(component.eventHoverId).toEqual(id);
  });

  it('should clear eventHoverId on hover out row', () => {
    component.onHoverOutRow();
    expect(component.eventHoverId).toEqual('');
  });
});
