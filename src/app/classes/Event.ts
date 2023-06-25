interface EventType {
  name: string;
  once: boolean;
}

export default abstract class Event {
  constructor(public data: EventType) {}
  abstract execute(...params: object[]): unknown;
}
