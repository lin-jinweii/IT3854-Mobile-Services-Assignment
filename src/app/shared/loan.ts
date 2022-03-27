import { Item } from './item';

export class Loan {
  items: Item[] = [];

  constructor(
    public username: string,
    public status: string,
    public duedate: Date,
    public days: number,
    public reason: string,
    public id?:string) { }

}