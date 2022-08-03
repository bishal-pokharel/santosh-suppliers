import React from "react";
import '../css/footer.styles.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const Footer = (()=>{
    return(
        <div className="footer_container">
            <div className="footer_div">
                <div className="fst_row">
                    <div className="footer_head">
                        <h2>Contact Us</h2>
                    </div>
                    <div className="subhead_footer_list">
                        <ul>
                            <li><address>Address:Kausaltar, Bhaktapur</address></li>
                            <li><address>phone: 9862079308</address></li>
                            <li><address>Open: Sun-Fri, 8AM - 8PM<br></br>Open: Sat, 8AM - 11AM</address></li>
                        </ul>
                    </div>
                </div>
                <div className="sec_row">
                    <div className="footer_head">
                        <h2>Our Company</h2>
                    </div>
                    <div className="subhead_footer_list">
                        <ul>
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>Contact Us</li>
                            <li>Location</li>
                        </ul>
                    </div>
                </div>
                <div className="third_row">
                    <div className="footer_head">
                        <h2>Our Company</h2>
                    </div>
                    <div className="subhead_footer_list">
                        <ul>
                            <li>Term and condition</li>
                            <li>Policies</li>
                            <li>Catalogs</li>
                            <li>Account</li>
                            <li>Return Policy</li>
                            <li>Cookie settings</li>
                            <li>Shipping Information</li>
                            <li>Product Recalls</li>
                        </ul>
                    </div>
                </div>
                <div className="fourth_row">
                    <div className="footer_head">
                        <h2>Social Media</h2>
                    </div>
                    <div className="subhead_footer_list">
                    <div className="social_media">
                    <span><FontAwesomeIcon icon={faTwitter} size="2x" /></span>
                    <span><FontAwesomeIcon icon={faFacebook} size="2x" /></span>
                    <span><FontAwesomeIcon icon={faInstagram} size="2x" /></span>
                    <span><FontAwesomeIcon icon={faLinkedinIn} size="2x" /></span>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default Footer;