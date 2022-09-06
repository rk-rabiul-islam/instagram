import React from 'react';
import axios from "axios";
import { useState } from 'react';
import { AiFillFacebook } from 'react-icons/ai';
import AuthFooter from '../../components/AuthFooter/AuthFooter';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./SignUP.scss"
import swal from 'sweetalert';

const SignUP = () => {


  // Create Alart toast
  const submitAlart = (msg, type) => {
    return type ? toast.warning(msg) : toast.success(msg); 
  }
  const [msg, setMsg] = useState({
    type  : '',
    msg   : "",
    status : false
  });

  // use State
  const [ input, setInput] = useState({
    data_type : "",
    name : "",
    username : "",
    password : ""
  });

  // Hendel input
  const hendleInput = (e) => {
    setInput((prev) => ({...prev, [e.target.name] : e.target.value}));
  }

    // Chack User login methord 
    const numberPattan = /^(01|8801|\+8801)[0-9]{9}$/;
    const emailPattan = /^[a-z0-9._]{4,30}@[a-z0-9-]{3,20}\.[a-z]{2,9}$/;



  const userRegisterHendle = async(e) => {
    e.preventDefault();

    try {

      if( !input.data_type || !input.name || !input.username || !input.password ){
        submitAlart('All fields are required', true);
      } 

          
    if(numberPattan.test(input.data_type)){

      await axios.post('http://localhost:5050/api/user/register', { 
        cell : input.data_type,
        email  : "",
        name : input.name,
        username : input.username,
        password : input.password 
       })
      .then( res =>{
        swal('Account created successfully', { icon: "success"});
        setMsg({
          type  : 'success',
          msg   : "Chack Your Phone for account verify opt",
          status : true
        });
        setInput({
          data_type : "",
          name : "",
          username : "",
          password : ""
        })

      })
      .catch( error =>{
        setMsg({
          type  : 'danger',
          msg   : error.response.data.message,
          status : true
        });

      });



    }else if(emailPattan.test(input.data_type)){

      await axios.post('http://localhost:5050/api/user/register', {
        email : input.data_type,
        cell  : "",
        name : input.name,
        username : input.username,
        password : input.password 
       })
        .then( res =>{
          swal('Account created successfully', { icon: "success"});
          setMsg({
            type  : 'success',
            msg   : "Chack Your email for account verify link",
            status : true
          });
          setInput({
            data_type : "",
            name : "",
            username : "",
            password : ""
          })
  
        })
        .catch( error =>{
          setMsg({
            type  : 'danger',
            msg   : error.response.data.message,
            status : true
          });
  
        });

    }else{
      swal('Enter a Phone number or Email address', { icon: "warning"});
    }

      
    } catch (error) {
      console.log(error.response);
    }

  }
  

  return (
    <div className="login_container">
      <ToastContainer/>
      <div className="login_full_sec sighUp_full_sec">
          <img src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="" className="login_logo" />
          <h2 className="signUp_page_log_bttom_text">Sign up to see photos and videos from your friends.</h2>
          <div className="login_form">
              <a className='logwith_facebook' href="#">{ <AiFillFacebook /> } <span>Log in with Facebook</span> </a>            
              <span className='login_or'>OR</span>
              { msg.status && <p className={` alert alert-${msg.type}`}>{msg.msg}</p> }                
              <form onSubmit={ userRegisterHendle }>
                  <input name='data_type' value={input.data_type} onChange={hendleInput} type="text" placeholder='Mobile number or email address' />
                  <input name='name' value={input.name} onChange={hendleInput} type="text" placeholder='Full Name' />
                  <input name='username' value={input.username} onChange={hendleInput} type="text" placeholder='username' />
                  <input name='password' value={input.password} onChange={hendleInput} type="password" placeholder='Password' />
                  <p className="signUp_page_about">
                    <span>People who use our service may have uploaded your contact information to Instagram. <a href="#">Learn more</a></span>
                    <span>By signing up, you agree to our <a href="#">Terms</a>, <a href="#">Privacy Policy</a> and <a href="#">Cookies Policy.</a> </span>
                  </p>
                  <button type='submit' className='login_btn'>Sign Up</button>
              </form>
          </div>
      </div>
      <div className="login_full_sec sign_up_sec">
        <span>Have an account? <a href="/login">Log in</a></span>
      </div>
      <div className="get_app">
        <span>Get the app.</span>
        <div className="get_app_logo">
          <a href="#"><img src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png" alt="" /></a>
          <a href="#"><img src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png" alt="" /></a>
          
        </div>
      </div>
      
      <AuthFooter/>
    </div>
  )
};

export default SignUP;