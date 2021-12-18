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

// Generics
type PossibleKeys = "meetup" | "conference" | "hackathon" | "webinar";

type Groups = {
  [k in PossibleKeys]: any;
};

type URLObject = { [k: string]: URL };
type Loaded<Key> = { format: Key; loaded: boolean };
async function loadFile<Formats extends URLObject, Key extends keyof Formats>(
  fileFormats: Formats,
  format: Key
  // @ts-ignore
): Promise<Loaded<Key>> {}
