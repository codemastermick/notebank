import { Note } from "./note";

export interface INotebook {
  uid: string;
  title: string;
  notes: Note[];
}

export type Notebook = INotebook;
