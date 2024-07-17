import { useState } from "react"
import { getProductById } from "./asyncMock"
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { useEffect } from "react";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState();
    const { id } = useParams()
    useEffect(() => {
        getProductById(id)
            .then((res) => {
                setProduct(res)
            })
            .catch((err) => console.log(err))
    }, [id])
    return (
        <div>
            < ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer