export interface INote {
  uid: string;
  title: string;
  contents: string;
  tags: string[];
}

export type Note = INote;
