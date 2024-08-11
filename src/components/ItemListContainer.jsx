import { useState } from "react"
import { getProducts, getProductsByCategory } from "./asyncMock"
import ItemList from "./ItemList"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
// import { db } from "../services/firebase-config"

const ItemListContainer = ({ greetings }) => {
    const [products, setProducts] = useState([])
    const { category } = useParams()
    console.log(category)
    useEffect(() => {
        if (!category) {
            getProducts().then((res) => {
                setProducts(res)
            }).catch((err) => console.log(err))
        } else {
            getProductsByCategory(category)
            .then((res)=>{
                setProducts(res)
            })
            .catch((err) => console.log(err))
        }      
    }, [category])
return (
    <div className="productos">
        <h1>{greetings}</h1>
        < ItemList products={products} />
    </div>
)
}

export default ItemListContainer
