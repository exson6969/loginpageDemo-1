import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import loginImg from '../assets/loginImg.svg';
import gLogo from '../assets/gLogo.png';
import appleLogo from '../assets/appleLogo.png';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false); 
    const [showPassword, setShowPassword] = useState(false); 
    const navigate = useNavigate();

    const languages = [
        { name: 'English', value: 'en' },
        { name: '繁體中文', value: 'zh-TW' },
        { name: 'Español', value: 'es' },
        { name: 'Italiano', value: 'it' },
        { name: 'Français', value: 'fr' },
        { name: 'Deutsch', value: 'de' },
        { name: '日本語', value: 'ja' },
        { name: '한국어', value: 'ko' },
        { name: 'Dutch', value: 'nl' },
        { name: 'Português', value: 'pt' },
        { name: 'العربية', value: 'ar' },
        { name: 'ไทย', value: 'th' },
        { name: 'Русский', value: 'ru' },
        { name: 'Melayu', value: 'ms' }
    ];

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handlePasswordFocus = () => {
        setPasswordFocused(true); 
    };

    const handlePasswordBlur = () => {
        setPasswordFocused(false); 
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = (e) => {
        e.preventDefault();

        // Add login logic 
          
        navigate('/calllogs'); 
    };

    return (
        <div className='p-6 h-screen flex'>
            <div className='bg-slate-50 w-1/3 p-6 rounded-xl lg:flex flex-col justify-between hidden'>
                <img className='w-28' src={logo} alt="clevguard logo" />
                <div>
                    <h1 className='text-3xl font-semibold text-center'>
                        Welcome to ClevGuard ID
                    </h1>
                    <img src={loginImg} alt="" />
                </div>
                <p className='text-center text-gray-500'>Copyright © 2024 ClevGuard.com. All rights reserved.</p>
            </div>

            <div className='lg:w-2/3 w-full'>
                <div>
                    <div className="flex lg:justify-end justify-between">
                          <img src={logo} alt="logo" className='block lg:hidden w-24' />
                        <div className="inline-flex items-center overflow-hidden rounded-md hover:bg-gray-50 hover:text-gray-700  bg-white" onClick={toggleDropdown}>
                           
                            <a
                                href="#"
                                className="px-4 py-2 text-sm text-gray-600 "
                            >
                                English
                            </a>

                            <button
                                className="h-full p-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700"
                            >
                                <span className="sr-only">Menu</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </div>

                        {isOpen && (
                            <div
                                className="absolute right-6 top-14 z-10 mt-2 w-56 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg"
                                role="menu"
                            >
                                <div className="p-2">
                                    {languages.map((language, index) => (
                                        <a
                                            key={index}
                                            href="#"
                                            className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                            role="menuitem"
                                        >
                                            {language.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className=' flex flex-col lg:items-center lg:justify-center p-6 h-full justify-between'>
                    <div>
                    <h2 className='text-2xl font-semibold'>
                    Login to your ClevGuard ID
                    </h2>
                    <div className='mt-3 flex gap-4'>
                    <button className='flex items-center border rounded px-6 py-2 gap-2'><img src={gLogo} alt="google logo" /> <span className='lg:block hidden'>Sign in with Google</span> </button>
                    <button className='flex border rounded px-4 py-2 gap-2'><img src={appleLogo} alt="apple logo" className='w-6' /></button>
                    </div>
                    <div className='flex w-full items-center'>
                        <div className='w-full bg-slate-200 h-0.5 '></div>
                    <p className='text-center p-4'>or</p>
                    <div className='w-full bg-slate-200 h-0.5'></div>
                    </div>

                    <form className='flex flex-col gap-4' onSubmit={handleLogin}>
                        <input required type="email" name="" id="" className='border rounded w-full h-11 p-2 focus:ring focus:ring-cyan-400 focus:border-0 focus:outline-none' placeholder='Email Address' />
                        
                        <div className={`flex items-center justify-between border rounded w-full h-11 p-2  ${passwordFocused ? 'password-wrapper-focused' : ''}`}>
                            <input
                            onFocus={handlePasswordFocus}
                            onBlur={handlePasswordBlur}
                required
                type={showPassword ? "text" : "password"}
              
                className=' focus:outline-none w-full'
                placeholder='Password'
            />
            <div
                className=" cursor-pointer"
                onClick={togglePasswordVisibility}
            >
                {showPassword ? (
                    <i class="bi bi-eye"></i>
                ) : (
                    <i class="bi bi-eye-slash"></i>
                )}
            </div>         
            </div>
                    <a href="" className='text-cyan-400  hover:text-cyan-500'>Forgot Password?</a>

                  <button className='bg-cyan-500 hover:bg-cyan-600 text-white py-2 rounded'>Login</button>
                    </form>
                    <p className='py-2 text-center text-gray-500'>Don't have an account? <a href="" className='text-cyan-400 hover:text-cyan-500'>Sign up</a></p>
                   <button className='text-gray-500 py-4 hover:text-cyan-400 hover:underline'>Have an invite code?</button>
                    </div>
                <p className='lg:hidden text-gray-400 text-center'>Copyright © 2024 ClevGuard.com. All rights reserved.</p>
                </div>
            </div>
            
        </div>
    );
};

export default Login;
