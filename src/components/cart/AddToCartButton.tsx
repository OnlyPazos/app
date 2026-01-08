import { useCart } from "./CartContext";

type Props = {
  product: {
    id: number;
    name: string;
    price: number;
  };
};

export default function AddToCartButton({ product }: Props) {
  const { addItem } = useCart();

  return (
    <button onClick={() => addItem(product)}>
      Agregar al carrito
    </button>
  );
}
