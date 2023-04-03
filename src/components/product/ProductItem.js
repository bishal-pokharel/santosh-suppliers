import React, { useEffect, useState } from "react";
import ProductItems from '../product/productItem.json';
import { useParams } from "react-router-dom";


const ProductItem = (()=>{
    const{ product_name }= useParams();
    const [check, setCheck] = useState(false);

    useEffect(()=>{
        ProductItems.filter((filterid) => {
            // console.log(filterid.product_name.includes(product_name));
            console.log(filterid.product_name)
            if(filterid.product_name.includes(product_name)){
                console.log("Sa");
                setCheck(true);
                // filterid.product_name.includes(product_name).map((data)=> {
                //     console.log(data)
                // })
            }else{
                console.log("not found");
                // setCheck(false);
            }
        })
    },[setCheck, product_name]);
    return(
        <>
        {check == true ? (
        <>
            {ProductItems.filter((filterid) => filterid.product_name.includes(product_name)).map((data) => {
            return(
                <>
                {console.log(product_name , data.product_name)}
                {product_name == data.product_name ? (
                    <>
                    <h1 key={data.id}>{data.product_name}</h1>
                    <h1>Yes I called....</h1>
                    </>
                ):(
                    <>
                    </>
                )}
                </>
            )
            
        })}
        </>
        ):(
        <>
        <h1>{product_name} not found.</h1>
        </>
        )}
        </>
    )

});

export default ProductItem;