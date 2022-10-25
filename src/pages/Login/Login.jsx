import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  const [data, setData] = useState([]);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const loadData = async () => {
      const res = await Axios.get(
        "https://api.airtable.com/v0/appjWdL7YgpxIxCKA/credenitals?maxRecords=3&view=Grid%20view",
        {
          headers: {
            Authorization: "Bearer keyfXgn8PL6pB3x32",
          },
        }
      );
      setData(res.data.records);
    };
    loadData();
  }, []);

  function login() {
    const filterUser = data.filter((user) => {
      return user.fields.username.match(userName);
    });
    const filterPwd = data.filter((user) => {
      return user.fields.password.match(Password);
    })
    if (filterUser.fields === userName && filterPwd.fields === Password) {
       console.log('success',filterUser,filterPwd)
    }
  }

  return (
    <section className="wrapper flex items-center justify-center h-screen">
      <div className="flex items-center justify-center flex-col w-1/3 h-full p-12">
        <Link to="/">
          <img className="h-12 m-4" src="/images/logo.svg" alt="" />
        </Link>
        <h3 className="text-lg font-semibold">Login into your Account</h3>
        <div className="input-wrap w-full p-5">
          <form>
            <div>
              <div className="flex items-left flex-col my-2">
                <label className="text-input m-1" htmlFor="Email">
                  Username
                </label>
                <div className="flex items-center justify-center bg-gray-200">
                  <input
                    value={userName}

                    required
                    name="Email"
                    className="bg-gray-200 w-full px-3 py-2.5 rounded outline-1 outline-none placeholder:text-slate-600"
                    type="text"
                    placeholder="Enter Username"
                    onChange={(e) => {
                      setUserName(e.target.value);
                    }}
                  />
                  <span className="bg-btn p-3 rounded-lg">
                    <img src="/images/mail.svg" alt="" />
                  </span>
                </div>
              </div>
              <div className="flex items-left flex-col my-2">
                <label className="text-input m-1" htmlFor="password">
                  Password
                </label>
                <div className="flex items-center justify-center bg-gray-200">
                  <input
                    value={Password}
                    required
                    name="password"
                    className="bg-gray-200 w-full px-3 py-2.5 rounded outline-1 outline-none placeholder:text-slate-600 "
                    type="password"
                    placeholder="Enter Your Password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  <span className="bg-btn p-3 rounded-lg">
                    <img src="/images/lock.svg" alt="" />
                  </span>
                </div>
              </div>
              <Link
                className="text-blue-900 text-sm underline flex justify-end"
                to="/forget"
              >
                Forget Password?
              </Link>
            </div>
            <button
              className="border-2 border-btn bg-btn w-full px-3 py-2 rounded my-5 text-white hover:font-semibold"
              type="submit"
              onSubmit={login()}
            >
              Login
            </button>
          </form>

          <div className="flex items-center justify-center">
            <hr className="w-2/5" />
            <span className="mx-5 text-gray-500 text-sm">OR</span>
            <hr className="w-2/5" />
          </div>

          <button className="text-btn border-2 border-btn w-full px-3 py-2 rounded my-5 hover:font-semibold">
            {" "}
            <Link to="/register">Sign Up</Link>{" "}
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center w-2/3 h-full bg-background">
        <img className="w-2/4" src="/images/login.png" alt="" />
      </div>
    </section>
  );
};

export default Login;
