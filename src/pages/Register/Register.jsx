import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="wrapper flex items-center justify-center h-screen">
      <div className="flex items-center justify-center flex-col w-1/3 h-full p-12">
        <Link to='/'><img className="h-12 m-4" src="/images/logo.svg" alt="" /></Link>
        <h3 className="text-lg font-semibold">Login into your Account</h3>
        <div className="input-wrap w-full p-5">
          <form action="">
            <div>
              <div className="flex items-left flex-col my-2">
                <label className="text-input m-1" htmlFor="Email">Email Address</label>
                <div className="flex items-center justify-center bg-gray-200">
                  <input className="bg-gray-200 w-full px-3 py-2.5 rounded outline-1 outline-none placeholder:text-slate-600" type="email" placeholder="JaneDoe@gmail.com" />
                  <span className="bg-btn p-3 rounded-lg"><img src="/images/mail.svg" alt="" /></span>
                </div>
              </div>
              <div className="flex items-left flex-col my-2">
                <label className="text-input m-1" htmlFor="Email">Password</label>
                <div className="flex items-center justify-center bg-gray-200">
                  <input className="bg-gray-200 w-full px-3 py-2.5 rounded outline-1 outline-none placeholder:text-slate-600 " type="password" placeholder="Enter Your Password" />
                  <span className="bg-btn p-3 rounded-lg"><img src="/images/lock.svg" alt="" /></span>
                </div>
              </div>
              <div className="flex items-left flex-col my-2">
                <label className="text-input m-1" htmlFor="Email">Confirm Password</label>
                <div className="flex items-center justify-center bg-gray-200">
                  <input className="bg-gray-200 w-full px-3 py-2.5 rounded outline-1 outline-none placeholder:text-slate-600 " type="password" placeholder="Confirm password" />
                  <span className="bg-btn p-3 rounded-lg"><img src="/images/lock.svg" alt="" /></span>
                </div>
              </div>
            </div>
            <button className="border-2 border-btn bg-btn w-full px-3 py-2 rounded my-5 text-white hover:font-semibold" type="submit">Sign Up</button>
          </form>

          <div className="flex items-center justify-center">
            <hr className="w-2/5"/>
            <span className="mx-5 text-gray-500 text-sm">OR</span>
            <hr className="w-2/5"/>
          </div>

          <Link className="text-blue-900 text-sm underline flex justify-center" to='/login'>If account already created? Click here.</Link>
        </div>
      </div>

      <div className="flex items-center justify-center w-2/3 h-full bg-background">
        <img className="w-2/4" src="/images/login.png" alt="" />
      </div>
    </div>
  );
};

export default Login;
