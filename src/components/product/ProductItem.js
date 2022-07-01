import React from "react";
import ProductItems from '../product/productItem.json';
import { useParams } from "react-router-dom";


const ProductItem = (()=>{

    const{ id }= useParams();
    console.log(id);
    return(
        <>
        {ProductItems.filter((filterid) => filterid.id.includes(id)).map((data) => {
            return(
                <>
                <h1 key={data.id}>{data.product_name}</h1>
                <h1>Yes I called....</h1>
                </>
            )
            
        })}
       
        </>
    )

});

export default ProductItem;