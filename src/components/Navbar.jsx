import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContex } from '../provider/AuthProvider';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContex);

    const handleLogout = () => {
        //  console.log('logoyt');

        logOut()
            .then(() => {
                alert("logout successfull")
            })
            .catch((error) => {
                alert(error)
            });
    }

    const links = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/all-game">All Games</Link></li>

        {!user && (
            <>
                <li><Link to="/auth/login">Login</Link></li>
                <li><Link to="/auth/register">Register</Link></li>
            </>
        )}
    </>

    return (
        <div className="w-11/12 mx-auto">
            <div className="navbar bg-base-100 shadow-sm">

            
                <div className="navbar-start">

                  
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>

                        <ul tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>

                    <Link to="/" className="ml-6 text-xl font-semibold">GAMEHUB</Link>
                </div>

               
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>

             
                <div className="navbar-end flex gap-3">

                    {user && user.photoURL && (
                        <Link to="/my-profile">
                            <img
                                className="w-12 h-12 rounded-full object-cover"
                                src={user.photoURL}
                                alt="profile"
                            />
                        </Link>
                    )}

                    {user ? (
                        <button onClick={handleLogout} className="btn btn-primary px-5">
                            Logout
                        </button>
                    ) : (
                        <Link to="/auth/login" className=" text-amber-50 btn bg-gradient-to-r from-orange-700 to-red-500 px-5">
                            Login
                        </Link>
                    )}

                </div>


            </div>
        </div>
    );
};

export default Navbar;
