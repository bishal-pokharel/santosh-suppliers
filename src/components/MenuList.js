import React from "react";
import { Link } from "react-router-dom";
import '../css/menubar.styles.scss';
import {Servicedata} from '../data/electricalAppliances';
import newData from "../data/electricalAppliances.json"

const MenuBar = (() =>{


    return(
        <div className="menuBar_container">
            <div className="menubar">
                <ul className="menu">
                    <li className="menu_list">Electrical Appliances
                        <ul className="sub_menu">
                            {
                                newData.map((data) =>{
                                            return(
                                                <>
                                                <li className="product_list" key={data.id}><Link to='/'>{data.product_name}</Link>
                                                <ul className="sub_head_menu" style={{background:data.background}}>
                                                {data?.sub_product?.length > 0 &&
                                                data.sub_product.map((list)=>{
                                                    return(
                                                        <li className="sub_product_list" key={list.sub_product_id}>{list.sub_product_name}</li>
                                                    )
                                                })}
                                                </ul>

                                                <ul className="nav_image_list_default">
                                                    {data?.selected_images && data?.selected_images?.length > 0 && 
                                                    data.selected_images.map((img)=>{
                                                        return(
                                                            <li className="sub_product_img" key={img.imgid}><img src={`../images/${img?.imageURL}`} alt="not found" /></li>
                                                        )
                                                    })}
                                                </ul> 
                                                </li>
                                                {/* this ul is for default image showing in sub list */}
                                                <ul className="nav_image_list">
                                                    {data?.selected_images && data?.selected_images?.length > 0 && 
                                                    data.selected_images.map((img)=>{
                                                        return(
                                                            <li className="sub_product_img" key={img.imgid}><img src={`../images/${img?.imageURL}`} alt="not found" /></li>
                                                        )
                                                    })}
                                                </ul> 
                                                </>
                                            )
                                })
                            }
                        </ul>
                    </li>


                    <li>Home Improvement</li>
                    <li>Dinner & Serveware </li>
                    <li>cook & Bakeware</li>
                    <li>Kitchen tools</li>
                    <li>storage Thermoware</li>
                    <li>Bar & Hotel</li>
                    <li>Others</li>
                </ul>
            </div>
        </div>
    )
});
export default MenuBar;