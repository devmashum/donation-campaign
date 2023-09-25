import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import Logo from '../assets/Logo.png'

const Navbar = () => {
    return (
        <div>
            <nav className=' flex justify-between items-center p-5'>



                <Link> <div className='mr-5 '>
                    <img src={Logo} alt="" />
                </div></Link>
                <div className='flex gap-3 font-bold'>

                    <div><NavLink to='/' className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                    }>Home</NavLink></div>

                    <div><NavLink to='/donation' className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                    }>Donation</NavLink></div>

                    <div> <NavLink to='/statistics' className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                    }>Statistics</NavLink></div>



                </div>
            </nav>
        </div>
    );
};

export default Navbar;