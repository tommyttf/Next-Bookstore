export interface IAddBookFormInput {
  name: string;
  price: number;
  category: string;
  description: string;
}

export interface IBook extends IAddBookFormInput {
  id: number;
}
