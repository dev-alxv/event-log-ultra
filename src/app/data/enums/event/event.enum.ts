
enum EventLevelEnum {
  WARNING = 'WARNING',
  ERROR = 'ERROR',
  INFO = 'INFO'
}

export type EventLevelType = keyof typeof EventLevelEnum;