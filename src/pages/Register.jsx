import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {

  const { createUser, setUser, updateUser } = use(AuthContext);
  // const [nameError, setNameError] = useState("");

  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    // console.log(e.target);
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    console.log(name, photo, email, password);

    createUser(email, password)
    .then((result) => {
      const user = result.user;
      // console.log(user);
      updateUser({ displayName: name, photoURL: photo })
        .then(() => {
          setUser({ ...user, displayName: name, photoURL: photo });
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
          setUser(user);
        });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage, errorCode);
      // ..
    });
};
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse w-11/12">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="font-bold text-xl">Register Your Account</h1>
            <form onSubmit={handleRegister} className="fieldset">
              <label className="label">Your Name</label>
              <input
                name="name"
                type="text"
                className="input"
                placeholder="Enter Your Name"
              />
              <label className="label">Photo URL</label>
              <input
                name="photo"
                type="text"
                className="input"
                placeholder="Upload Your Photo"
              />
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

              <button type="submit" className="btn btn-neutral mt-4">Register</button>
              <p className="text-sm text-center">
                Already Have An Account ?{" "}
                <Link className="text-red-500" to={"/auth/login"}>
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
