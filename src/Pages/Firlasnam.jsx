import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import linkedinblack from '../assets/linkedinblack.png';

const Firlasnam = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const navigate = useNavigate();

    const handleContinue = () => {
        if (firstName && lastName) {
            navigate('/Locatjob');
        } else {
            toast.error(
                <div className="flex items-center">
                    <span>Please fill in your first and last name!</span>
                </div>,
                {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "light",
                    progressStyle: { backgroundColor: '#f56565' },
                }
            );
        }
    };

    return (
        <div>
            <div className='w-[400px] shadow-lg h-auto p-[20px] mx-auto mb-[25px]'>
                <h1 className='text-[#000000BF] font-medium text-[14px] mb-[5px]'>First Name</h1>
                <div className="flex mb-[15px] items-center text-[20px] leading-[1.33333] p-[15px] font-normal text-black/90 border-[#0009] relative z-[1] w-[360px] h-[30px] border-[#000] border-[1px] rounded-[3px]">
                    <input
                        type='text'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="flex-grow focus:outline-none"
                    />
                </div>
                <h1 className='text-[#000000BF] font-medium text-[14px] mb-[5px]'>Last Name</h1>
                <div className="flex mb-[15px] items-center text-[20px] leading-[1.33333] p-[15px] font-normal text-black/90 border-[#0009] relative z-[1] w-[360px] h-[30px] border-[#000] border-[1px] rounded-[3px]">
                    <input
                        type='text'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="flex-grow focus:outline-none"
                    />
                </div>

                <button
                    onClick={handleContinue}
                    className='w-[352px] h-[48px] bg-[#0A66C2] text-center text-[#fff] font-medium rounded-full mb-[20px]'>
                    Continue
                </button>
            </div>
            <div className='flex justify-center items-center gap-4 text-[15px] mt-[43%]'>
                <img className='w-[56px] h-[14px]' src={linkedinblack} alt="LinkedIn" />
                <h1>© 2024</h1>
                <h1>User Agreement</h1>
                <h1>Privacy Policy</h1>
                <h1>Community Guidelines</h1>
                <h1>Cookie Policy</h1>
                <h1>Copyright Policy</h1>
                <h1>Send Feedback</h1>
                <h1>Language</h1>
            </div>

            <ToastContainer />
        </div>
    );
};

export default Firlasnam;
