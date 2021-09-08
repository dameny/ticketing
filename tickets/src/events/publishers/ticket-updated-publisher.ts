import { Publisher, Subjects, TicketUpdatedEvent } from "@tachyontix/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
