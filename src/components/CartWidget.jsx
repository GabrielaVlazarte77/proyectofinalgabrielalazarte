// src/components/CartWidget.jsx

import { useCart } from '../contexts/CartContext';
import cartIcon from '../../src/assets/cart.svg';

const CartWidget = () => {
  const { cartItems } = useCart();
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      <img src={cartIcon} alt="carrito de compras" />
      {itemCount > 0 && <span>{itemCount}</span>}
    </div>
  );
};

export default CartWidget;
