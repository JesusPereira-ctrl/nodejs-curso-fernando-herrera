export interface Ticket {
  id: string;
  number: number;
  createdAt: Date;
  handleAtDesk?: string | undefined;
  handleAt?: Date | undefined;
  done: boolean;
}
