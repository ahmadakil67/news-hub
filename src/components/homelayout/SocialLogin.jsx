import React from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-bold text-lg mb-3'>Login With</h2>
            <div className='flex flex-col gap-2'>
                <button className='btn '><FaGoogle size={24}/>Login With Google</button>
                <button className='btn '><FaFacebook size={24}/>Login With Facebook</button>
            </div>
        </div>
    );
};

export default SocialLogin;