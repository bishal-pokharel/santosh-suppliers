import React from "react";
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
// import AccountCircle from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import logo from '../images/logo.png';
// import MenuBar from './MenuList';

const NavBar = (()=> {

    return(
        <>
        <div className="navbar">
            <div className="navbar_item">
                <div className="search_box">
                <FormControl sx={{ m: 5, width: '55ch' }} variant="filled">
                <OutlinedInput
                id=""
                endAdornment={<InputAdornment position="end">
                    {/* <AccountCircle /> */}
                    <SearchIcon />
                </InputAdornment>}
                aria-describedby="outlined-weight"
                inputProps={{
                    'aria-label': 'weight',
                }}
                />
                </FormControl>
                </div>
                <div className="logo_div">
                <img src={logo} alt="logo_img" />
                </div>
                <div className="login_div">
                    <div className="login_cart_love">
                        <div className="login">
                            <span>login</span><PersonIcon sx={{ fontSize: 30}} />
                        </div>
                        <div className="loved_icon">
                        <FavoriteIcon sx={{ fontSize: 30}} /> <span>0</span>
                        </div>
                        <div className="card_icon">
                        <ShoppingCartIcon sx={{ fontSize: 30}} /> <span>0</span>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        {/* <MenuBar /> */}
        </>
    )
});
export default NavBar;