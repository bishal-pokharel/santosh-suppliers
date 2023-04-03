import React from "react";
import '../css/card.styles.scss';
import CardProduct from '../data/productCard.json';
import SearchIcon from '@mui/icons-material/StarBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Navigate } from "react-router";
import { Link } from "react-router-dom";

const ProductCard = (() => {

    // const{ name }= useParams();

    const productClick = (()=>{
        Navigate(".")
    });

    return(
        <div className="card_container">
            <div className="card_wrap">
                    {CardProduct.filter((cardid) => cardid.trending_product.includes("Trending_product")).map((data) => {
                    {/* {CardProduct.filter((filterid) => filterid.trending_product.includes("Trending_product")).map((data) => { */}
                        return(
                            
                            <div key={data.id} className="card">
                                <Link to={`individualitem/${data.product_name}`}>
                                <div className="card_img">
                                    <img src={`../images/${data?.images}`} alt={data.product_name} />
                                </div>
                                <div className="product_head">
                                    <h1>{data.product_name}</h1>
                                </div>
                                <div className="card_icon">
                                <SearchIcon sx={{ fontSize: 30}} />
                                <SearchIcon sx={{ fontSize: 30}} />
                                <SearchIcon sx={{ fontSize: 30}} />
                                <SearchIcon sx={{ fontSize: 30}} />
                                <SearchIcon sx={{ fontSize: 30}} />
                                </div>

                                <div className="price_div">
                                    <h2>{data.product_price}</h2>
                                </div>

                                <div className="add_card_fav">
                                <FavoriteIcon sx={{ fontSize: 30}} />
                                <ShoppingCartIcon sx={{ fontSize: 30}} />
                                </div>
                                </Link>
                            </div>
                            
                            
                        )
                    })}
            </div>

            {/* this is another card container which show the lates item */}
            <div className="secondHeading">
                <h1>Latest Product</h1>
            </div>
            <div className="card_wrap second_card_wrapper">
                
            {CardProduct.filter((cardid) => cardid.trending_product.includes("Trending_product")).map((data) => {
                    {/* {CardProduct.filter((filterid) => filterid.trending_product.includes("Trending_product")).map((data) => { */}
                        return(
                            
                            <div key={data.id} className="card">
                                <Link to={`individualitem/${data.product_name}`}>
                                <div className="card_img">
                                    <img src={`../images/${data?.images}`} alt={data.product_name} />
                                </div>
                                <div className="product_head">
                                    <h1>{data.product_name}</h1>
                                </div>
                                <div className="card_icon">
                                <SearchIcon sx={{ fontSize: 30}} />
                                <SearchIcon sx={{ fontSize: 30}} />
                                <SearchIcon sx={{ fontSize: 30}} />
                                <SearchIcon sx={{ fontSize: 30}} />
                                <SearchIcon sx={{ fontSize: 30}} />
                                </div>

                                <div className="price_div">
                                    <h2>{data.product_price}</h2>
                                </div>

                                <div className="add_card_fav">
                                <FavoriteIcon sx={{ fontSize: 30}} />
                                <ShoppingCartIcon sx={{ fontSize: 30}} />
                                </div>
                                </Link>
                            </div>
                            
                            
                        )
                    })}
            </div>
        </div>
    )

});

export default ProductCard;