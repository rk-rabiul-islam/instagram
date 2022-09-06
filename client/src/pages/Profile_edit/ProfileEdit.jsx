import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import "./ProfileEdit.scss"

const ProfileEdit = () => {
  return (
    <div className="edit_container">
    <Header/>
      <div className="edit_warap">
        <div className="edit_body">
            <div className="left_colum">
                <div className="edite_logo">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png" alt="" />
                </div>
                <div className="edte_menu">
                    <ul>
                        <li><a href="#">Edit Profile</a></li>
                        <li><a href="#">Change password</a></li>
                        <li><a href="#">Apps and websites</a></li>
                        <li><a href="#">Email notifications</a></li>
                        <li><a href="#">Push notifications</a></li>
                        <li><a href="#">Manage contacts</a></li>
                        <li><a href="#">Privacy and security</a></li>
                        <li><a href="#">Ads</a></li>
                        <li><a href="#">Login activity</a></li>
                        <li><a href="#">Emails from Instagram</a></li>
                        <li><a href="#">Help</a></li>
                        <li><a href="#">Digital collectibles</a></li>
                    </ul>
                </div>
            </div>
            <div className="right_colum">
                <div className="edite_form">
                    <form action="">
                        <div className="form-group">
                          <label htmlFor=""></label>
                          <input type="text" name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
                          <small id="helpId" class="text-muted">Help text</small>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileEdit;