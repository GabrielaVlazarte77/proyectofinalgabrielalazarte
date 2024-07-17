import ItemCount from "./ItemCount"

const ItemDetail = ({name,img,category,description,price,stock}) => {
  return (
    <article>
        <h1>{name}</h1>
        <img src={img} style={{width:300}}/>
        <p>Category: {category}</p>
        <h2>{description}</h2>
        <h2>Precio: {price}$</h2>
        <ItemCount stock={stock} />
        <hr />

    </article>
  )
}

export default ItemDetail