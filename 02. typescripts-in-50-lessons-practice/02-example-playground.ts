type Article = {
  title: string;
  price: number;
  vat: number;
  stock?: number;
  description?: string;
};

const book: Article = {
  price: 29,
  vat: 0.2,
  title: "Another book by Smashing Books",
};
