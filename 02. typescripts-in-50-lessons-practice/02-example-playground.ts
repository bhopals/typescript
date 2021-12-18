type Article = {
  title: string;
  price: number;
  vat: number;
  stock?: number;
  description?: string;
};

enum classes {
  FIRST,
  SECOND,
  THIRD,
}

const book: Article = {
  price: 29,
  vat: 0.2,
  title: "Another book by Smashing Books",
};
