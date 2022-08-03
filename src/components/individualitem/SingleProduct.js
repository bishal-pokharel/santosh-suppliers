import React from "react";
import SingleProductItems from '../../data/productCard.json'
import { useParams } from "react-router-dom";
import './singleproduct.styles.scss'
import SearchIcon from '@mui/icons-material/StarBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const SingleProduct = (()=>{

    const{ product_name }= useParams();
    console.log(product_name);
    return(
        <>
        {SingleProductItems.filter((filterid) => filterid.product_name.includes(product_name)).map((data) => {
            return(
                <>
                <h1 key={data.id}>{data.product_name}</h1>
                {/* <h1>Yes I called....</h1> */}
                <div className="product_container">
                    <div className="product_show">
                        <div className="product_image">
                            <img className="single_img" src={`../images/${data.images}`} alt={data.product_name} />
                        </div>
                    </div>
                    <div className="product_description">
                        <div className="product_details">
                            <h1>{data.Product_full_name}</h1>
                            <div className="card_icon">
                                <div className="rating">
                                <SearchIcon sx={{ fontSize: 20}} />
                                <SearchIcon sx={{ fontSize: 20}} />
                                <SearchIcon sx={{ fontSize: 20}} />
                                <SearchIcon sx={{ fontSize: 20}} />
                                </div>
                                <div className="share_love_icon">
                                <FavoriteIcon sx={{ fontSize: 25}} />
                                <ShareIcon sx={{ fontSize: 25}} />
                                </div>
                            </div>
                            <div className="small_notice">
                                <address>Brand: Electrons</address>
                            </div>
                            <div className="instock">
                                <p>Stock : <span>{data.in_stock}</span></p>
                            </div>
                            <div className="Price">
                                <h1>{data.product_price}</h1>
                                <h3><del>{data?.product_dis_price && data.product_dis_price}</del><span>{` ${data.offer_rate}`}</span></h3>
                                <div className="Quantity">
                                    <input type="number" className="quantity" />
                                </div>
                            </div>
                            <div className="buy_btn">
                                <div className="btnclass buy_div">
                                    <button className="singlebtn buy_item">Buy Now</button>
                                </div>
                                <div className="btnclass addcart_div">
                                    <button className="singlebtn addtocart_item">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product_overall_details">
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography sx={{fontSize:20}}>Product details of {data.Product_full_name}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        {data?.product_details && 
                        data.product_details.map((list, index) =>{
                            return(
                                <>
                                <ul>
                                    <li><span>{index +1}</span> {list}</li>
                                </ul>
                                </>
                            )
                        })
                        }
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <Typography sx={{fontSize:20}}>Ratings & Reviews of {data.Product_full_name}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                    >
                    <Typography sx={{fontSize:20}}>Disabled Accordion</Typography>
                    </AccordionSummary>
                </Accordion>
                </div>
                            </>
                        )
                        
                    })}
                
        </>
    )
});


export default SingleProduct;