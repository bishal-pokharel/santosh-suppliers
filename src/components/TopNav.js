import React from "react";
import ReactDOM from 'react-dom'
import '../css/Navbar.styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
// import { faTwitter } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebook, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const TopNav = (() => {
    return(
        <>
        <div className="header_div">
            <div className="title_left">
                <h2><Link to="/">Santosh Suppliers</Link></h2>
                <address>Sirutar, Bhaktapur</address>
                <address>Contact No: 9817355558 / 9862079308</address>
            </div>
            <div className="title_right">
                <div className="social_media">
                <span><FontAwesomeIcon icon={faTwitter} size="2x" /></span>
                <span><FontAwesomeIcon icon={faFacebook} size="2x" /></span>
                <span><FontAwesomeIcon icon={faInstagram} size="2x" /></span>
                <span><FontAwesomeIcon icon={faLinkedinIn} size="2x" /></span>
                </div>
            </div>
        </div>
        </>
    )
});
export default TopNav;

