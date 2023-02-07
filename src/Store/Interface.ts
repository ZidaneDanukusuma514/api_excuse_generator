export type DataType = {
  id: number;
  excuse: string;
  category: string;
};

export interface Mode {
  mode: string;
}

export interface CategoryInt {
  mode: string;
}

export interface Storestate {
  value: string;
  Data?: DataType;
  Category: CategoryInt[];
  getData: (mode: string) => void;
}
