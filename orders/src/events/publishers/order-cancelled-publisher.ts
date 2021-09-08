import { Publisher, Subjects, OrderCancelledEvent } from "@tachyontix/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
