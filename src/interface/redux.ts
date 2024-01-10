import {IBook} from "@/interface/index";

export interface IBookModalDetail {
  isOpen: boolean;
  selectedId?: number;
}

export interface IMessage {
  isShow: boolean;
  message: string
}

export interface IReduxStore {
  bookModalDetail: IBookModalDetail;
  bookList: IBook[];
  message: IMessage;
}