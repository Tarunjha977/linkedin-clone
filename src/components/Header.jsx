import React from 'react'
import LinkedinLogo from '../assets/LinkedinLogo.png';
import { MdOutlineArticle } from "react-icons/md";
import { MdPeopleAlt } from "react-icons/md";
import { IoLeafOutline } from "react-icons/io5";
import { PiBagFill } from "react-icons/pi";
import { MdOutlineGames } from "react-icons/md";
import { IoTvOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate();

    const handleClickiop = () => {
        navigate('/Joinnow');

    };


    const handleClickartical = () => {
        setTimeout(() => {
            navigate('/Articles');
        }, 2000);
    };

    return (
        <div>
            <div className='flex justify-center gap-[5rem] mt-[12px] items-center'>
                <img
                    alt='Linkedin logo'
                    src={LinkedinLogo}
                    className='w-[110px] h-[58px] ml-14'
                />
                <div className='flex justify-center gap-[3rem] items-center ml-[200px]'>
                    <div onClick={handleClickartical} className='flex flex-col cursor-pointer items-center justify-center'>
                        <MdOutlineArticle className='text-[25px] opacity-70' />
                        <h1>Articles</h1>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <MdPeopleAlt className='text-[25px] opacity-70' />
                        <h1>People</h1>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <IoLeafOutline className='text-[25px] opacity-70' />
                        <h1>Learning</h1>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <PiBagFill className='text-[25px] opacity-60' />
                        <h1>Jobs</h1>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <MdOutlineGames className='text-[25px] opacity-70' />
                        <h1>Games</h1>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <IoTvOutline className='text-[25px] opacity-70' />
                        <h1>Get the app</h1>
                    </div>
                    <div className='flex justify-center items-center gap-[1rem]'>
                        <button onClick={() => navigate('/Login')} className='w-[110px] h-[50px] text-[16px] font-semibold text-[#0a66c2] border-[#0a66c2] rounded-full border-[1px]'>
                            Sign in
                        </button>
                        <button onClick={handleClickiop} className='w-[110px] bg-[#0a66c2] text-[16px] font-semibold text-[#fff] h-[50px] rounded-full border-[1px]'>
                            Join now
                        </button>
                    </div>
                </div>
                {/* <button className='w-[110px] h-[50px] rounded-full border-[1px]'>
                    Sign in 
                </button> */}
            </div>
        </div>
    )
}

export default Header
