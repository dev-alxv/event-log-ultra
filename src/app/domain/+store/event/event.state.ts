import { Event } from "../../models/Event/event.model";

export class EventState {
  constructor(
    public collection?: Event[],
  ) { }
}
