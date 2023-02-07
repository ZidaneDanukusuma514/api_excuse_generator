export type DataType = {
  id: number;
  excuse: string;
  category: string;
};

export enum Mode {
  family = "family",
  office = "office",
  children = "children",
  college = "college",
  party = "party",
  funny = "funny",
  unbelievable = "unbelievable",
  developers = "developers",
  gaming = "gaming",
}

export interface CategoryInt {
  mode: string;
}

export interface Storestate {
  value: string;
  Data: DataType[];
  Category: CategoryInt[];
  insertData: (parameter: DataType) => void;
  getData: (mode: Mode) => void;
}
