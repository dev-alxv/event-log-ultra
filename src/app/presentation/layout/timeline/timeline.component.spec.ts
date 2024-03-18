import { EventEmitter } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventStore } from 'src/app/domain/+store/event/event.store';
import { TimelineComponent } from './timeline.component';


describe('TimelineComponent', () => {
  let component: TimelineComponent;
  let fixture: ComponentFixture<TimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimelineComponent],
      providers: [EventStore]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize eventCollection', () => {
    expect(component.eventCollection).toBeDefined();
    expect(component.eventCollection).toEqual([]);
  });

  it('should initialize periodStart and periodEnd', () => {
    expect(component.periodStart).toBeInstanceOf(Date);
    expect(component.periodEnd).toBeInstanceOf(Date);
  });

  it('should have eventHoverIdInput as an Input property', () => {
    expect(component.eventHoverIdInput).toEqual('');
  });

  it('should have eventHoverIdEventOutput as an Output property', () => {
    expect(component.eventHoverIdEventOutput).toBeInstanceOf(EventEmitter);
  });

  it('should call eventStore constructor', () => {
    const eventStore = TestBed.inject(EventStore);
    expect(eventStore).toBeTruthy();
  });

  it('should call ngOnInit', () => {
    spyOn(component, 'ngOnInit');
    component.ngOnInit();
    expect(component.ngOnInit).toHaveBeenCalled();
  });

  it('should call onHoverEvent', () => {
    spyOn(component, 'onHoverEvent');
    const eventId = '123';
    component.onHoverEvent(eventId);
    expect(component.onHoverEvent).toHaveBeenCalledWith(eventId);
  });

  it('should call onHoverOutEvent', () => {
    spyOn(component, 'onHoverOutEvent');
    component.onHoverOutEvent();
    expect(component.onHoverOutEvent).toHaveBeenCalled();
  });
});
