import React, { use, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const { logIn } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    logIn(email, password)
      .then((result) => {
        console.log(result.user)
        alert("Logged In Successfully");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        // alert(errorCode, errorMessage);
        setError(errorCode);
      });
  };
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse w-11/12">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="font-bold text-xl">Login Your Account</h1>
            <form onSubmit={handleLogin} className="fieldset">
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              {error && <p className="text-red-400 text-xs">Wrong Password Or Email</p>}
              <button type="submit" className="btn btn-neutral mt-4">
                Login
              </button>
              <p className="text-sm text-center">
                Don't Have An Account ?{" "}
                <Link className="text-red-500" to={"/auth/register"}>
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
