import ItemCount from "./ItemCount"
import { useCart } from "../contexts/CartContext"

const ItemDetail = ({id,name,img,category,description,price,stock}) => {
  const { addToCart } = useCart();

  const handleAddToCart = (quantity) => {
    addToCart({id, name, price, quantity});
  };

  return (
    <article>
        <h1>{name}</h1>
        <img src={img} style={{width:300}} alt={name}/>
        <p>Category: {category}</p>
        <h2>{description}</h2>
        <h2>Precio: {price}$</h2>
        <ItemCount stock={stock} onAdd={handleAddToCart} />
        <hr />

    </article>
  )
}

export default ItemDetail