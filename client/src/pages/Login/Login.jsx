import React, { useState } from 'react';
import { AiFillFacebook } from "react-icons/ai";
import AuthFooter from '../../components/AuthFooter/AuthFooter';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Login.scss";
import axios from 'axios';
import { useNavigate} from "react-router-dom"
import cookie from 'js-cookie';
import { useContext } from 'react';
import AuthContext from '../../components/Auth/contexts/AuthContexts';
import LoaderContexts from '../../components/AllContexts/contexts/LoaderContexts';
import swal from 'sweetalert';



const Login = () => {

  // use State update
  const {dispatch} = useContext(AuthContext);
  const {LoaderDispatch} = useContext(LoaderContexts);

  // login Redicreat
  const navigate = useNavigate();
  
    // Create Alart toast
    const submitAlart = (msg, type) => {
  
      return type ? toast.success(msg) : toast.warning(msg); 
    }
  
  
    // use State
    const [ input, setInput] = useState({
      authInput : "",
      password : ""
    });
  
    // Hendel input
    const hendleInput = (e) => {
  
      setInput((prev) => ({...prev, [e.target.name] : e.target.value}));
  
    }

    // User Login Heandler
    const userLoginHendle = async(e) => {
      e.preventDefault();
  
      try {
        if( !input.authInput || !input.password ){
          submitAlart('All fields are required',)
        }else{

          await axios.post('http://localhost:5050/api/user/login', input)
          .then( res => {

            if(res.data.user.isVerified){
              cookie.set('token', res.data.token);
              dispatch({type : "LOGIN_USER_SUCCESS", payload: res.data.user});        
              navigate('/');
              LoaderDispatch({type : "LOADER_START"})
              submitAlart("User Login successfully", true)
            }
            else{
              swal(`Hello ${res.data.name}`, "Please Verify You Account!", "warning");
            }
  
          });
        }
        
      } catch (error) {
        submitAlart("Wrong Email or Passwrod", false);
      }
  
    }


  return (
    <div className="login_container">
      <ToastContainer/>
        <div className="login_full_sec">
            <img src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="" className="login_logo" />
            <div className="login_form">
              
                <form onSubmit={userLoginHendle}>
                    <input name='authInput' value={input.authInput} onChange={hendleInput} type="text" placeholder='Phone number, username or email address' />
                    <input name='password' value={input.password} onChange={hendleInput} type="password" placeholder='Password' id="" />
                    <button type='submit' className='login_btn'>Sign Up</button>
                </form>
                <span className='login_or'>OR</span>
                <a className='logwith_facebook' href="#">{ <AiFillFacebook /> } <span>Log in with Facebook</span> </a>
                <a className='forgot_pass' href="/accounts/password/forgot/" >Forgotten your password?</a>
            </div>
        </div>
        <div className="login_full_sec sign_up_sec">
          <span>Don't have an account? <a href="/Register">Sign up</a></span>
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

export default Login;