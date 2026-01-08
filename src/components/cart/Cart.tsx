import { useCart } from "./CartContext";
import "./Cart.css";

export default function Cart() {
  const { items } = useCart();

  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <aside className="cart">
      <h3>Carrito</h3>

      {items.length === 0 && <p>Carrito vacío</p>}

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} x{item.quantity}
          </li>
        ))}
      </ul>

      <strong>Total: ${total.toFixed(2)}</strong>
    </aside>
  );
}
