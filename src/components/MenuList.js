import React from "react";
import { Link } from "react-router-dom";
import '../css/menubar.styles.scss';
import homeImprovement from '../data/homeImprovement.json';
import electricalAppliances from "../data/electricalAppliances.json"

const MenuBar = (() =>{


    return(
        <div className="menuBar_container">
            <div className="menubar">
                <ul className="menu">
                    <li className="menu_list"><Link to="/">Electrical Appliances</Link>
                        <ul className="sub_menu">
                            {
                                electricalAppliances.map((data) =>{
                                            return(
                                                <>
                                                <li className="product_list" key={data.id}><Link to={`/product/${data.id}`}>{data.product_name}</Link>
                                                <ul className="sub_head_menu" style={{background:data.background}}>
                                                {data?.sub_product?.length > 0 &&
                                                data.sub_product.map((list)=>{
                                                    return(
                                                        <li className="sub_product_list" key={list.sub_product_id}><Link to="/">{list.sub_product_name}</Link></li>
                                                    )
                                                })}
                                                </ul>

                                                <ul className="nav_image_list_default">
                                                    {data?.selected_images && data?.selected_images?.length > 0 && 
                                                    data.selected_images.map((img)=>{
                                                        return(
                                                            <li className="sub_product_img" key={img.imgid}><Link to="/"><img src={`../images/${img?.imageURL}`} alt="not found" /></Link></li>
                                                        )
                                                    })}
                                                </ul> 
                                                </li>
                                                {/* this ul is for default image showing in sub list */}
                                                <ul className="nav_image_list">
                                                    {data?.selected_images && data?.selected_images?.length > 0 && 
                                                    data.selected_images.map((img)=>{
                                                        return(
                                                            <li className="sub_product_img" key={img.imgid}><Link to="/"><img src={`../images/${img?.imageURL}`} alt="not found" /></Link></li>
                                                        )
                                                    })}
                                                </ul> 
                                                </>
                                            )
                                })
                            }
                        </ul>
                    </li>


                    <li className="menu_list"><Link to="#">Home Improvement</Link> 
                    <ul className="sub_menu">
                            {
                                homeImprovement.map((data) =>{
                                            return(
                                                <>
                                                <li className="product_list" key={data.id}><Link to="/">{data.product_name}</Link>
                                                <ul className="sub_head_menu" style={{background:data.background}}>
                                                {data?.sub_product?.length > 0 &&
                                                data.sub_product.map((list)=>{
                                                    return(
                                                        <li className="sub_product_list" key={list.sub_product_id}><Link to="/">{list.sub_product_name}</Link></li>
                                                    )
                                                })}
                                                </ul>

                                                <ul className="nav_image_list_default">
                                                    {data?.selected_images && data?.selected_images?.length > 0 && 
                                                    data.selected_images.map((img)=>{
                                                        return(
                                                            <li className="sub_product_img" key={img.imgid}><Link to="/"><img src={`../images/${img?.imageURL}`} alt="not found" /></Link></li>
                                                        )
                                                    })}
                                                </ul> 
                                                </li>
                                                {/* this ul is for default image showing in sub list */}
                                                <ul className="nav_image_list">
                                                    {data?.selected_images && data?.selected_images?.length > 0 && 
                                                    data.selected_images.map((img)=>{
                                                        return(
                                                            <li className="sub_product_img" key={img.imgid}><Link to="/"><img src={`../images/${img?.imageURL}`} alt="not found" /></Link></li>
                                                        )
                                                    })}
                                                </ul> 
                                                </>
                                            )
                                })
                            }
                        </ul>
                    </li>
                    <li className="menu_list"><Link to="/">Dinner & Serveware </Link></li>
                    <li className="menu_list"><Link to="/">cook & Bakeware</Link></li>
                    <li className="menu_list"><Link to="/">Kitchen tools</Link></li>
                    <li className="menu_list"><Link to="/">storage Thermoware</Link></li>
                    <li className="menu_list"><Link to="/">Bar & Hotel</Link></li>
                    <li className="menu_list"><Link to="/">Others</Link></li>
                </ul>
            </div>
        </div>
    )
});
export default MenuBar;