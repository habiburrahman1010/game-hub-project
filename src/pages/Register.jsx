import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContex } from "../provider/AuthProvider";

const Register = () => {
  const [error, setError] = useState("");
  const { createUser, updateUser, setUser } = useContext(AuthContex);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const terms = form.terms.checked;

    // REGEX: 6+ characters, 1 uppercase, 1 lowercase
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!terms) {
      setError("Please accept terms and conditions");
      return;
    }

    if (!passwordRegex.test(password)) {
      setError(
        "Password must have 6+ characters, 1 uppercase, and 1 lowercase letter"
      );
      return;
    }

    setError("");

      createUser(email,password)
        .then(result=>{
            const user=result.user;
          //  console.log(user)
          updateUser({displayName:name, photoURL:photo}).then(()=>{
             setUser({...user,displayName:name, photoURL:photo})
             navigate("/")
            
          })
          .catch((error)=>{
            console.log(error);
            setUser(user)

            
          })

       

        })
         .catch((error) => {
   // const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });}

  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <div className="card-body">

            <form onSubmit={handleRegister}>
              {/* Name */}
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input input-bordered"
                placeholder="Your Name"
                required
              />

              {/* Photo URL */}
              <label className="label">Photo URL</label>
              <input
                type="text"
                name="photo"
                className="input input-bordered"
                placeholder="Photo URL"
                required
              />

              {/* Email */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input input-bordered"
                placeholder="Email"
                required
              />

              {/* Password */}
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input input-bordered"
                placeholder="Password"
                required
              />

              {/* Terms */}
              <div className="mt-2">
                <label className="label cursor-pointer">
                  <input type="checkbox" name="terms" className="checkbox" />
                  <span className="ml-2">Accept terms and conditions</span>
                </label>
              </div>

              {/* Submit */}
              <button type="submit" className="btn btn-neutral mt-4 w-full">
                Register
              </button>
            </form>

            {/* Error message */}
            {error && <p className="text-red-500 mt-2">{error}</p>}

            <p className="mt-4">
              Already have an account?
              <Link to="/auth/login" className="text-blue-400 underline">
                Login
              </Link>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
