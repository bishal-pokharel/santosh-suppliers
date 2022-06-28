import React from "react";
import ProductItems from '../product/productItem.json'


const ProductItem = (({match})=>{

    const p_id = match.params.id

    return(
        <>
        {ProductItems.filter((filterid) => filterid.id.includes(p_id)).map((data) => {
            return(
                <>
                <h1 key={data.p_id}>{data.product_name}</h1>
                </>
            )
            
        })}
        <h1>Yes I called....</h1>
        </>
    )

});

export default ProductItem;