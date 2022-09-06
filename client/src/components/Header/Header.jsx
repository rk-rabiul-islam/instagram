
import React, { useContext } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import "./Header.scss";
import {MsgIcon,  HomeIcon, AddNewPost, ExploreIcon, HeartIcon, ProfileIcon, BoockMarkIcon, SattingIcon, SwitchIcon, OutLineHomeIcon} from '../icons/MyIcons';
import AuthContext from '../Auth/contexts/AuthContexts';
import cookie from 'js-cookie';
import avator from '../assets/images/avator.png'
import { Link } from 'react-router-dom';


const Header = () => {


    // use Contex
  const {userInfo, dispatch} = useContext(AuthContext);

  // User Logout hendle
  const HendleLogout = (e) => {

    cookie.remove('token');
    dispatch({type : "LOG_OUT",})

  }
  
  // use Contex
  let userPhoto = "";
  if( userInfo.photo === 'avator.png' || userInfo.photo === ''){
      userPhoto = avator
  }else{
    userPhoto = userInfo.photo
  }



// Creat ProfileOption
    const ProfileOption = (e) => {
        e.preventDefault();

        document.getElementById("Dropdown").classList.toggle("show");
        document.getElementById("Header_user_img").classList.toggle("img_focus");
        document.getElementById("header_icon_ul").classList.toggle("outicons");


    }

 // Close the dropdown if the user clicks outside of it
    window.onclick = (e) => {
        if (!e.target.matches('#Header_user_img')) {
            document.getElementById("Dropdown").classList.remove("show");
            document.getElementById("Header_user_img").classList.remove("img_focus");
            document.getElementById("header_icon_ul").classList.remove("outicons");


            if(e.target.matches('#Dropdown')){
                document.getElementById("Dropdown").classList.add("show");
                document.getElementById("Header_user_img").classList.add("img_focus");
            }else if(e.target.matches('#Dropdown li a')){
                document.getElementById("Dropdown").classList.add("show");
                document.getElementById("Header_user_img").classList.add("img_focus");

            }
        }

        // log out work
        if(e.target.matches('.header_logOut')){
            HendleLogout();
        }
       


  }



  return (
    <div className="header_container">
        <div className="header_full_sec">
            <div className="header_logo_sec">
                <a href="/"><img src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="" className="login_logo" />
                </a>
            </div>
            <div className="header_search_sec">
                <div className="search_sec">
                    <label htmlFor="search_input"><IoSearchOutline /></label>
                    <input id='search_input' type="text" placeholder='Search' />
                </div>
            </div>
            <div className="header_menu_sec">
                <ul className=''  id='header_icon_ul'>
                    <li><a href="/"> <span className='homeoutIcon'><OutLineHomeIcon/></span><span className='homeIcon'><HomeIcon/></span></a></li>
                    <li><a href="#"><MsgIcon/></a></li>
                    <li><a href="#"><AddNewPost/></a></li>
                    <li><a href="#"><ExploreIcon/></a></li>
                    <li><a href="#"><HeartIcon/></a></li>
                    <li><a href="#" id='toggolButton'  onClick={ProfileOption} className='topbar_manu_item'><img src={userPhoto} id="Header_user_img" alt="" />

                        <ul  className='user_profile_options ' id='Dropdown'>
                            <li><Link to={`/${userInfo.username}`}> <ProfileIcon/>Profile</Link></li>
                            <li><a href="#"><BoockMarkIcon/> Saved</a></li>
                            <li><a href="#"><SattingIcon/> Settiong</a></li>
                            <li><a href="#"><SwitchIcon/> Switch accounts</a></li>
                            <li><a className='header_logOut' href="/login">Log out</a></li>
                        </ul>
                    
                    </a></li>
                </ul>
                
            
            </div>
        </div>
    </div>

  )
}

export default Header;