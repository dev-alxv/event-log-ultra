import { EventLevelType } from "src/app/data/enums/event/event.enum";

export interface IEventDescription {
  timestamp: string;
  level: EventLevelType;
  message: string;
}
