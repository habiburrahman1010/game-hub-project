import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContex } from "../provider/AuthProvider";

const Register = () => {
  const [error, setError] = useState("");
  const { createUser } = useContext(AuthContex);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;

    // Password REGEX
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!terms) {
      setError("Please accept terms and conditions");
      return;
    }

    if (!passwordRegex.test(password)) {
      setError(
        "Password must be at least 6 characters and include uppercase & lowercase letters"
      );
      return;
    }

    setError("");

    createUser(email, password)
      .then(() => {
        e.target.reset();
        navigate("/auth/login"); // redirect to login
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">

        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <div className="card-body">

            <form onSubmit={handleRegister}>
              <label className="label">Email</label>
              <input
                type="email"
                className="input input-bordered"
                name="email"
                placeholder="Email"
                required
              />

              <label className="label">Password</label>
              <input
                type="password"
                className="input input-bordered"
                name="password"
                placeholder="Password"
                required
              />

              <div className="mt-2">
                <label className="label cursor-pointer">
                  <input type="checkbox" name="terms" className="checkbox" />
                  <span className="ml-2">Accept terms and conditions</span>
                </label>
              </div>

              <button type="submit" className="btn btn-neutral mt-4 w-full">
                Register
              </button>
            </form>

            {error && <p className="text-red-500 mt-2">{error}</p>}

            <p className="mt-4">
              Already have an account?{" "}
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
