
import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems(prevItems => {
      const itemExists = prevItems.find(prod => prod.id === item.id);
      if (itemExists) {
        return prevItems.map(prod =>
          prod.id === item.id ? { ...prod, quantity: prod.quantity + 1 } : prod
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
