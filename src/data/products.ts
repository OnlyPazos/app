export type Product = {
  id: number;
  name: string;
  slug: string;
  price: number;
  image: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Camiseta básica",
    slug: "camiseta-basica",
    price: 19.99,
    image: "/img/camiseta.jpg",
  },
  {
    id: 2,
    name: "Zapatillas urbanas",
    slug: "zapatillas-urbanas",
    price: 59.99,
    image: "/img/zapatillas.jpg",
  },
];
