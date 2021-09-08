import { Subjects, Publisher, PaymentCreatedEvent } from "@tachyontix/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
