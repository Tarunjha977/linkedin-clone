import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import LinkedinLogo from '../assets/LinkedinLogo.png';
import linkedinblack from '../assets/linkedinblack.png';
import { useNavigate } from 'react-router-dom';
import Firlasnam from './Firlasnam';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Joinnow = () => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const navigate = useNavigate();

    const [emailOrPhone, setEmailOrPhone] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [activeTab, setActiveTab] = useState(0);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleAgreeAndJoin = () => {
        if (!emailOrPhone) {
            toast.error('Please fill in your email or phone number!');
        } else if (password.length < 6) {
            toast.error('Password must be at least 6 characters long!');
        } else {
            setActiveTab(1);
        }
    };

    return (
        <div className='w-[1128px] h-[695px] mx-auto'>
            <ToastContainer />
            <img
                alt='Linkedin logo'
                src={LinkedinLogo}
                className='w-[135px] h-[78px] mt-[32px] ml-14'
            />
            <h1 className='text-[32px] text-center mb-[20px]'>Make the most of your professional life</h1>

            {activeTab === 0 ? (
                <div>
                    <div className='w-[400px] shadow-lg h-auto p-[20px] mx-auto mb-[25px]'>
                        <h1 className='text-[#000000BF] font-medium text-[14px] mb-[5px]'>Email or phone number</h1>
                        <div className="flex mb-[15px] items-center leading-[1.33333] p-[15px] font-normal text-black/90 border-[#0009] relative z-[1] w-[360px] h-[30px] border-[#000] border-[1px] rounded-[3px]">
                            <input
                                type='email'
                                value={emailOrPhone}
                                onChange={(e) => setEmailOrPhone(e.target.value)}
                                className="flex-grow text-[15px] focus:outline-none"
                            />
                        </div>
                        <h1 className='text-[#000000BF] font-medium text-[14px] mb-[5px]'>Password (6+ characters)</h1>
                        <div className="flex mb-[15px] items-center text-[20px] leading-[1.33333] p-[15px] font-normal text-black/90 border-[#0009] relative z-[1] w-[360px] h-[30px] border-[#000] border-[1px] rounded-[3px]">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="flex-grow text-[15px] focus:outline-none"
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="text-blue-500 font-medium text-sm ml-2 focus:outline-none"
                            >
                                {showPassword ? 'Hide' : 'Show'}
                            </button>
                        </div>
                        <label className='flex items-center justify-start'>
                            <Checkbox {...label} defaultChecked color="success" />Keep me logged in
                        </label>
                        <h1 className='text-[12px] text-center text-[#00000096] mb-[20px]'>
                            By clicking Agree & Join or Continue, you agree to the LinkedIn <span className='text-[#0652dd]'>User Agreement, Privacy Policy</span>, and <span className='text-[#0652dd]'>Cookie Policy</span>.
                        </h1>
                        <button
                            className='w-[352px] h-[48px] bg-[#0A66C2] text-center text-[#fff] font-medium rounded-full mb-[20px]'
                            onClick={handleAgreeAndJoin}
                        >
                            Agree & Join
                        </button>
                        <div className='flex items-center justify-center mb-[15px]'>
                            <div className='w-[150px] h-[1px] bg-[#d6d6d6]'></div>
                            <p className='text-[15px] font-medium text-[#0009] ml-[10px] mr-[10px]'>or</p>
                            <div className='w-[150px] h-[1px] bg-[#d6d6d6]'></div>
                        </div>
                        <h1 className='text-center font-normal'>Already on LinkedIn? <span onClick={() => navigate('/Login')} className='text-[#0652dd] cursor-pointer'>Sign in</span>
                        </h1>
                    </div>
                    <h1 className='text-center text-[16px]'>Looking to create a page for a business? <span className='text-[#0652dd]'>Get help</span></h1>
                    <div className='flex justify-center items-center gap-4 text-[15px] mt-[25%]'>
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
            ) : (
                <Firlasnam />
            )}
        </div>
    );
}

export default Joinnow;
