import React from 'react';
import Header from '../../components/Header/Header';
import { SettingsIcon } from '../../components/icons/MyIcons';
import "./Profile.scss";
import textImg from "../../components/assets/images/avator.png"
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
  <>
    <div className="profile_container">
      
    <Header/>
      <div className="profile_warap">
        <div className="profile_top">
          <div className="profile_img">
            <button>
              <img src={textImg} alt="" className="profile_photo" />
            </button>
          </div>
          <div className="profile_info">
            <div className="profile_settings">
              <h3 className="username">Number</h3>
              <Link to={'/accounts/edit/'} className="edite_btn">Edit Profile</Link>
              <button className="settings_icon"><SettingsIcon/></button>
            </div>
            <div className="post_follow">
              <span>0 posts</span>
              <span>0 followers</span>
              <span>0 following</span>
            </div>
            <div className="profile_name">
              <div className="name">Rk Rabiul Islam Razu</div>
            </div>
          </div>
        </div>
        <div className="profile_body"></div>
        <div className=""></div>
      </div>
    </div>

  </>
  )
}

export default Profile;