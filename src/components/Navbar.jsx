import React from 'react';
import logo from '../assets/logo.png'
import { Link, NavLink } from 'react-router';

const Navbar = () => {



    return (
        <div className=' shadow-sm '>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><NavLink to={`/`}>Home</NavLink></li>
                            <li><NavLink to={`/plants`}>Plants</NavLink></li>
                            <li><NavLink to={`/profile`}>My Profile</NavLink></li>

                        </ul>
                    </div>
                    <Link to='/' className="text-xl flex items-center"><img className='w-[60px] h-[60px]' src={logo} alt="" /><p className='font-bold -ml-2'>GreenNest</p> </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to={`/`}>Home</NavLink></li>
                        <li><NavLink to={`/plants`}>Plants</NavLink></li>
                        <li><NavLink to={`/profile`}>My Profile</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to='/login' className="btn bg-green-700 px-7">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;