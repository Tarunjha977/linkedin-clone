import React, { useState } from 'react'
import LinkedinLogo from '../assets/LinkedinLogo.png'
import linkedinblack from '../assets/linkedinblack.png'
import Checkbox from '@mui/material/Checkbox';
import { FaApple } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const navigate = useNavigate();

    const handleClickiop = () => {
        navigate('/Joinnow');

    };
    return (
        <div>
            <img
                alt='Linkedin logo'
                src={LinkedinLogo}
                className='w-[110px] h-[58px] mt-[32px] ml-14'
            />
            <div className='w-[352px] shadow-md p-6 rounded-lg mx-auto mb-[20px] bg-white'>
                {/* <div className='flex flex-col items-center justify-center mt-10'> */}
                <h1 className='text-[32px] font-semibold'>Sign in</h1>
                <p className=' text-[14px] mb-[20px]'>Stay updated on your professional world.</p>
                <input id="username"
                    placeholder="Email or phone"
                    type="text"
                    className='text-[20px] leading-[1.33333] mb-[28px] p-[15px] font-normal text-black/90 border-[#0009] rounded-[4px] border-[1px] relative z-[1] w-[100%] h-[50px]'
                />
                <div className="flex mb-[15px] items-center text-[20px] leading-[1.33333] p-[15px] font-normal text-black/90 border-[#0009] rounded-[4px] border-[1px] relative z-[1] w-[100%] h-[50px]">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        className="flex-grow focus:outline-none"
                    />
                    <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="text-blue-500 font-medium text-sm ml-2 focus:outline-none"
                    >
                        {showPassword ? 'Hide' : 'Show'}
                    </button>
                </div>
                <h1 className='text-[#0a66c2] font-semibold mb-[5px]'>Forgot password?</h1>
                <label className='flex items-center justify-start'>
                    <Checkbox {...label} />Keep me logged in</label>
                <div class="flex items-center justify-center mb-[15px] ">
                    <button class=" w-[304px] h-[52px] bg-[#0a66c2] font-semibold text-[#fff] rounded-full" type="submit">
                        Sign in
                    </button>
                </div>
                <div className='flex items-center justify-center mb-[15px]'>
                    <div className='w-[120px] h-[1px] bg-[#0009]'></div>
                    <p className='text-[15px] font-medium text-[#0009] ml-[10px] mr-[10px]'>or</p>
                    <div className='w-[120px] h-[1px] bg-[#0009]'></div>
                </div>
                <p className='text-[12px] mb-[25px]'>
                    By clicking Continue, you agree to LinkedIn’s
                    <span className='text-[#0652dd]'>User Agreement, Privacy Policy</span>,
                    and <span className='text-[#0652dd]'>Cookie Policy</span>.</p>

                {/* </div> */}
                <div>
                    <button className='w-[100%] h-[42px] border-[1px] border-[#000] rounded-full flex justify-center gap-2 items-center'><FaApple className='text-[24px]' />Sign in with Apple</button>
                </div>
            </div>
            <h1 className='text-center text-[18px]'>New to LinkedIn?
                <span onClick={handleClickiop} className='text-[#0652dd] cursor-pointer duration-150 hover:border-b-[1px] hover:border-b-[#0652dd]'>Join now</span></h1>
            <div className='flex justify-center items-center gap-4 text-[15px] mt-[11%]'>
                <img className='w-[56px] h-[14px]' src={linkedinblack} />
                <h1>© 2024</h1>
                <h1>User Agreement</h1>
                <h1>Privacy Policy</h1>
                <h1>Community Guidelines</h1>
                <h1>Cookie Policy</h1>
                <h1>Copyright Policy</h1>
                <h1>Send Feedback</h1>
                <h1>Language</h1>
            </div>
        </div>
    )
}

export default Login
