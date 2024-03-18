import { Event } from "src/app/domain/models/Event/event.model";

enum InteractActions {
  'UPDATE_EVENT_COLLECTION',
}

type ActionType = keyof typeof InteractActions;

export interface IEventStoreInteractAction {
  action: ActionType;
  eventCollection?: Event[];
}
