import React from 'react';
import { NavLink } from 'react-router';
import user from '../assets/user.png'
const Navbar = () => {
    return (
        <div className='flex justify-between items-center w-11/12 mx-auto my-3'>
            <div></div>
            <div className='text-accent flex list-none gap-5'>
                <li><NavLink to={'/'}>Home</NavLink></li>
                <li><NavLink to={'/about'}>About</NavLink></li>
                <li><NavLink to={'/career'}>Career</NavLink></li>
            </div>
            <div className='flex gap-4'>
                <img src={user} alt="" />
                <button className='btn btn-primary px-8'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;