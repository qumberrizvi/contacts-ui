import {Contact} from "./contact.model";

export class Message {
  id!: string;
  otp!: number;
  contact?: Contact;
  createdAt!: Date;
}
