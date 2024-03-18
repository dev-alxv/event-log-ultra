import * as uuid from 'uuid';

import { EventLevelType } from "src/app/data/enums/event/event.enum";
import { IEventDescription } from "src/app/data/interfaces/descriptions/event/description";
import { IEventTimelineDate } from '../../interfaces/event/event.interfaces';

export class Event {

  public id: string;
  public timestamp: Date;
  public level: EventLevelType;
  public uiMessage: string;
  public timelineData: IEventTimelineDate;

  constructor(eventDescription: IEventDescription) {

    // set id
    this.id = uuid.v4();

    // set timestamp
    this.timestamp = new Date(eventDescription.timestamp) ?? undefined;

    // set level
    this.level = eventDescription.level ?? undefined;

    // set ui message
    this.uiMessage = eventDescription.message ?? undefined;

    // set timeline data
    this.timelineData = {
      timelineRelativePosition: ''
    }
  }
}
