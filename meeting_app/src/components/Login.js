import React from 'react';
import './Login.css';

const Login = props => {
  return (
    <div className="login-wrapper">
      
      <h2 className="loginFormHeader">Login Form</h2>

      <form action="/calender">
        <div className="container">
          <label for="uname"><b>Username</b></label>
          <input type="text" placeholder="Enter Username" name="uname" required  />

          <label for="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required />
              
          <button type="submit">Login</button>
          <label><input type="checkbox" checked="checked" name="remember" /> Remember me </label>
        </div>

        <div className="container submitBtnWrapper">
          <span className="psw">Forgot <a href="/">password?</a></span>
        </div>
      </form>
    </div>
  );
};

export default Login;