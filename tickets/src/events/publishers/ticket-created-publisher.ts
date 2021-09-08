import { Publisher, Subjects, TicketCreatedEvent } from "@tachyontix/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
