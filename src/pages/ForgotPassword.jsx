import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const ForgotPassword = () => {
    const auth = getAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const [email, setEmail] = useState("");

    
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const emailFromLogin = params.get("email");
        if (emailFromLogin) setEmail(emailFromLogin);
    }, [location.search]);

    const handleReset = (e) => {
        e.preventDefault();

        if (!email) {
            alert("Please enter your email");
            return;
        }

        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert("Password reset email sent!");
                window.location.href = "https://mail.google.com"; 
            })
            .catch((error) => alert(error.message));
    };

    return (
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl m-auto my-8">
            <div className="card-body">
                <h2 className="text-xl font-bold mb-4">Reset Password</h2>

                <form onSubmit={handleReset}>
                    <label className="label">Email</label>
                    <input
                        type="email"
                        className="input input-bordered w-full"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email"
                    />

                    <button className="btn btn-neutral mt-4 w-full">
                        Reset Password
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;
