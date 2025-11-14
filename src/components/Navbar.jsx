import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const links = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/all-game">All Games</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
    </>

    return (
        <div className="w-11/12 mx-auto">
            <div className="navbar bg-base-100 shadow-sm">

                {/* Left Section */}
                <div className="navbar-start">

                    {/* Mobile Dropdown */}
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

                    <Link to="/" className="btn btn-ghost text-xl">GAMEHUB</Link>
                </div>

                {/* Desktop Menu */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>

                {/* Right Button */}
                <div className="navbar-end">
                    <Link
                        to="/login"
                        className="w-20 p-2 text-center bg-gradient-to-r from-orange-500 to-red-500 text-white 
                        font-semibold rounded-lg shadow-md 
                        hover:shadow-lg hover:scale-105 transition duration-300"
                    >
                        Login
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Navbar;
