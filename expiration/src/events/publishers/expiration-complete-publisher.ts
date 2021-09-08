import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from "@tachyontix/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
