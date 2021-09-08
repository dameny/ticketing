import { Publisher, OrderCreatedEvent, Subjects } from "@tachyontix/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
