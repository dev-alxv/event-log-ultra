import { IEventDescription } from "../../interfaces/descriptions/event/description";

export const ApiEndpointMockResponse: IEventDescription[] = [
  {
    "timestamp": "2021-08-01T12:00:00.000Z",
    "level": "WARNING",
    "message": "Metric 1 is above the warning threshold"
  },
  {
    "timestamp": "2021-08-01T13:00:00.000Z",
    "level": "ERROR",
    "message": "Metric 1 is above the error threshold"
  },
  {
    "timestamp": "2021-08-01T14:00:00.000Z",
    "level": "WARNING",
    "message": "Metric 1 is above the error threshold"
  },
  {
    "timestamp": "2021-08-01T15:00:00.000Z",
    "level": "INFO",
    "message": "Metric 1 is back to normal"
  },
  {
    "timestamp": "2021-08-01T20:00:00.000Z",
    "level": "INFO",
    "message": "Metric 1 is back to normal"
  },
  {
    "timestamp": "2021-08-02T12:00:00.000Z",
    "level": "INFO",
    "message": "Telemetry downloaded"
  },
  {
    "timestamp": "2021-08-02T12:05:00.000Z",
    "level": "ERROR",
    "message": "Metric 1 is above the error threshold"
  },
  {
    "timestamp": "2021-08-02T12:09:00.000Z",
    "level": "INFO",
    "message": "Telemetry downloaded"
  },
  {
    "timestamp": "2021-08-02T12:22:00.000Z",
    "level": "INFO",
    "message": "Telemetry downloaded"
  }
];
