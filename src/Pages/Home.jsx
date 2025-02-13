import React, { useState } from 'react'
import Select from 'react-select';
import Header from '../components/Header'
import welcomepage from '../assets/welcomepage.png'
import dbvmcall from '../assets/dbvmcall.png'
import h6n82li4xu0q23s8jqizk6j from '../assets/h6n82li4xu0q23s8jqizk6j.svg';
import dhh8rr3wohexkaya6jhn2y8j from '../assets/dhh8rr3wohexkaya6jhn2y8j.svg';
import eghb2zc0p5s2x42wbi80w4v8a from '../assets/eghb2zc0p5s2x42wbi80w4v8a.jpg';
import bgimg from '../assets/bgimg.png'
import { IoIosArrowDown } from "react-icons/io";
import { BsChevronRight } from "react-icons/bs";
import YouTubeEmbed from '../components/YouTubeEmbed';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const topics = [
    { value: 'business-analysis', label: 'Business Analysis and Strategy', courses: '1,620+ courses' },
    { value: 'business-software', label: 'Business Software and Tools', courses: '2,620+ courses' },
    { value: 'career-development', label: 'Career Development', courses: '600+ courses' },
    { value: 'customer-service', label: 'Customer Service', courses: '240+ courses' },
    { value: 'dei', label: 'Diversity, Equity, and Inclusion (DEI)', courses: '320+ courses' },
    { value: 'finance-accounting', label: 'Finance and Accounting', courses: '290+ courses' },
    { value: 'human-resourcess', label: 'Human Resourcess', courses: '540+ courses' },
    { value: 'leadership-and-management', label: 'Leadership and Management', courses: '1960+ courses' },
    { value: 'marketing', label: 'Marketing', courses: '1010+ courses' },
    { value: 'professional-development', label: 'Professional Development', courses: '1890+ courses' },
    { value: 'project-management', label: 'Project Management', courses: '560+ courses' },
    { value: 'Sales', label: 'Sales', courses: '300+ courses' },
    { value: 'Small-Business-and-Entrepreneurship', label: 'Small Business and Entrepreneurship', courses: '350+ courses' },
    { value: 'training-and-education', label: 'Training and Education', courses: '320+ courses' },
    { value: 'AEC', label: 'AEC', courses: '1470+ courses' },
    { value: 'animation-and-illustration', label: 'Animation and Illustration', courses: '1810+ courses' },
    { value: 'Audio and Music', label: 'Audio and Music', courses: '430+ courses' },
];
const Home = () => {

    const [, setSelectedTopic] = useState(null);
    const [inputValue, setInputValue] = useState(''); // Keep input empty after selection

    const handleChange = (selectedOption) => {
        setSelectedTopic(selectedOption);
        setInputValue(''); // Clear the input value to keep the placeholder visible
    };
    const navigate = useNavigate();

    const [showEmailDropdown, setShowEmailDropdown] = useState(false);
    const [, setSelectedEmail] = useState('');
    const [emails] = useState([
        'example1@gmail.com',
        'example2@gmail.com',
        'example3@gmail.com'
    ]); // This can be fetched from localStorage if needed

    // const navigate = useNavigate();

    const handleEmailClick = (email) => {
        setSelectedEmail(email);
        setShowEmailDropdown(false); // Close dropdown after selecting
    };

    return (
        <div>
            <Header />
            <div className='flex w-[1280px] mt-[40px] mx-auto justify-center items-center'>
                <div>
                    <h1 className='text-[48px] text-[#526a6e]'>Welcome to your professional community</h1>
                    <button className='w-[400px] mt-[20px] h-[45px] bg-[#1a73e8] text-[#fff] text-[15px] font-medium rounded-full border-[1px]'>
                        Continue With Google
                    </button>
                    <button
                        onClick={() => setShowEmailDropdown(!showEmailDropdown)}
                        className='w-[400px] h-[45px] text-[#000] text-[15px] border-[#000] mt-[20px] font-medium rounded-full border-[1px]'>
                        Sign in with email
                    </button>
                    {showEmailDropdown && (
                        <div className='w-[400px] border border-gray-300 bg-white rounded-md mt-2 shadow-lg'>
                            {emails.map((email, index) => (
                                <div
                                    key={index}
                                    className='p-2 cursor-pointer hover:bg-gray-100'
                                    onClick={() => handleEmailClick(email)}
                                >
                                    {email}
                                </div>
                            ))}
                        </div>
                    )}

                    <h1 className='text-[12px] text-center w-[400px] mt-[20px]'>
                        By clicking Continue to join or sign in, you agree to LinkedIn’s
                        <span className='text-[#0652dd]'> User Agreement, Privacy Policy</span>, and
                        <span className='text-[#0652dd]'> Cookie Policy</span>.
                    </h1>
                    <h1 className='text-[16px] mt-[20px] ml-[150px]'>New to LinkedIn? <span onClick={() => navigate('/Joinnow')}
                        className='text-[#0652dd] cursor-pointer'>Join now</span></h1>
                </div>
                <img
                alt='welcomepage'
                    src={welcomepage}
                    className='w-[700px] h-[560px]'
                />
            </div>
            <div className=' bg-[#00000014] w-[1903px] p-[40px] mt-10 mx-auto h-auto'>
                <div className=' max-w-[1158px] mx-auto h-auto'>
                    <div className='grid grid-cols-2 justify-center items-center mt-10'>
                        <div>
                            <h1 className='text-[32px] text-[#000000e6]'>Explore collaborative articles</h1>
                            <p className='text-[20px] mt-[12px]'>We’re unlocking community knowledge in a new way. Experts add insights directly into
                                each article, started with the help of AI.</p>
                        </div>
                        <div>
                            <div>
                                <button className='w-[122px] h-[50px] rounded-full border-[#000] border-[1px]'>
                                    Marketing
                                </button>
                                <button className='w-[180px] ml-[10px] h-[50px] rounded-full border-[#000] border-[1px]'>
                                    Public Administration
                                </button>
                                <button className='w-[122px] ml-[10px] h-[50px] rounded-full border-[#000] border-[1px]'>
                                    Healthcare
                                </button>
                                <button className='w-[122px] ml-[10px] h-[50px] rounded-full border-[#000] border-[1px]'>
                                    Engineering
                                </button>
                            </div>
                            <div>
                                <button className='w-[122px] h-[50px] rounded-full border-[#000] border-[1px] mt-3'>
                                    IT Services
                                </button>
                                <button className='w-[122px] ml-[10px] h-[50px] rounded-full border-[#000] border-[1px] mt-3'>
                                    Sustainability
                                </button>
                                <button className='w-[202px] ml-[10px] h-[50px] rounded-full border-[#000] border-[1px] mt-3'>
                                    Business Administration
                                </button>
                            </div>
                            <div>
                                <button className='w-[182px] ml-[10px] h-[50px] rounded-full border-[#000] border-[1px] mt-3'>
                                    Telecommunications
                                </button>
                                <button className='w-[142px] ml-[10px] h-[50px] rounded-full border-[#000] border-[1px] mt-3'>
                                    HR Management
                                </button>
                                <button className='w-[92px] ml-[10px] h-[50px] rounded-full text-[#0652dd] font-medium border-[#0652dd] border-[1px] mt-3'>
                                    Show all
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' w-[1903px] p-[40px] mt-10 mx-auto h-auto'>
                <div className=' max-w-[1158px] mx-auto h-auto'>
                    <div className='grid grid-cols-2 justify-center mt-10'>
                        <div>
                            <h1 className='text-[32px] text-[#000000e6] w-[400px]'>Find the right job or internship for you</h1>
                        </div>
                        <div>
                            <div>
                                <button className='w-[122px] h-[50px] rounded-full border-[#000] border-[1px]'>
                                    Engineering
                                </button>
                                <button className='w-[180px] ml-[10px] h-[50px] rounded-full border-[#000] border-[1px]'>
                                    Business Development
                                </button>
                                <button className='w-[122px] ml-[10px] h-[50px] rounded-full border-[#000] border-[1px]'>
                                    Finance
                                </button>
                            </div>
                            <div>
                                <button className='w-[198px] h-[50px] rounded-full border-[#000] border-[1px] mt-3'>
                                    Administrative Assistant
                                </button>
                                <button className='w-[142px] ml-[10px] h-[50px] rounded-full border-[#000] border-[1px] mt-3'>
                                    Retail Associate
                                </button>
                                <button className='w-[152px] ml-[10px] h-[50px] rounded-full border-[#000] border-[1px] mt-3'>
                                    Customer Service
                                </button>
                            </div>
                            <div>
                                <button className='w-[112px] ml-[10px] h-[50px] rounded-full border-[#000] border-[1px] mt-3'>
                                    Operations
                                </button>
                                <button className='w-[198px] ml-[10px] h-[50px] rounded-full border-[#000] border-[1px] mt-3'>
                                    Information Technology
                                </button>
                                <button className='w-[102px] ml-[10px] h-[50px] rounded-full border-[#000000] border-[1px] mt-3'>
                                    Marketing
                                </button>
                            </div>
                            <div>
                                <button className='w-[152px] ml-[10px] h-[50px] rounded-full border-[#000000] border-[1px] mt-3'>
                                    Human Resources
                                </button>
                            </div>
                            <div>
                                <button className='w-[132px] flex items-center justify-center gap-1 ml-[10px] h-[40px] rounded-full border-[#000000] border-[1px] mt-3'>
                                    Show more <IoIosArrowDown className='text-[20px] pt-1' />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' bg-[#F1ECE5] w-[1903px] p-[40px] mt-10 mx-auto h-auto'>
                <div className=' max-w-[1158px] mx-auto h-auto'>
                    <div className=' text-center mt-10'>
                        <div>
                            <h1 className='text-[32px] pb-[32px] text-[#B24020]'>Post your job for millions of people to see</h1>
                        </div>
                        <div>
                            <button className='w-[112px] ml-[10px] h-[50px] rounded-full text-[#0652dd] font-medium border-[#0652dd] border-[1px] mt-3'>
                                Post a job
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' w-[1903px] p-[40px] mt-10 mx-auto h-auto'>
                <div className=' max-w-[1158px] mx-auto h-auto'>
                    <div className='grid grid-cols-2 justify-center items-center mt-10'>
                        <div>
                            <h1 className='text-[32px] text-[#000000e6]'>Explore collaborative articles</h1>
                            <p className='text-[20px] mt-[12px]'>We’re unlocking community knowledge in a new way. Experts add insights directly into
                                each article, started with the help of AI.</p>
                        </div>
                        <div>
                            <div>
                                <button className='w-[202px] h-[50px] mt-[12px] rounded-full border-[#000] border-[1px]'>
                                    E-Commerce Platforms
                                </button>
                                <button className='w-[150px] ml-[10px] mt-[12px] h-[50px] rounded-full border-[#000] border-[1px]'>
                                    CRM Software
                                </button>
                            </div>
                            <div>
                                <button className='w-[335px] h-[50px] mt-[12px] rounded-full border-[#000] border-[1px]'>
                                    Human Resources Management Systems
                                </button>
                                <button className='w-[180px] ml-[10px] mt-[12px] h-[50px] rounded-full border-[#000] border-[1px]'>
                                    Recruiting Software
                                </button>
                            </div>
                            <div>
                                <button className='w-[242px] h-[50px] mt-[12px] rounded-full border-[#000] border-[1px]'>
                                    Sales Intelligence Software
                                </button>
                                <button className='w-[260px] ml-[10px] mt-[12px] h-[50px] rounded-full border-[#000] border-[1px]'>
                                    Project Management Software
                                </button>
                            </div>
                            <div>
                                <button className='w-[192px] h-[50px] mt-[12px] rounded-full border-[#000] border-[1px]'>
                                    Help Desk Software
                                </button>
                                <button className='w-[240px] ml-[10px] mt-[12px] h-[50px] rounded-full border-[#000] border-[1px]'>
                                    Social Networking Software
                                </button>
                            </div>
                            <div>
                                <button className='w-[252px] h-[50px] mt-[12px] rounded-full border-[#000] border-[1px]'>
                                    Desktop Publishing Software
                                </button>
                                <button className='w-[110px] ml-[10px] mt-[12px] h-[50px] rounded-full text-[#0652dd] font-medium border-[#0652dd] border-[1px]'>
                                    Show all
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' w-[1903px] p-[40px] mt-10 mx-auto h-auto'>
                <div className=' max-w-[1158px] mx-auto h-auto'>
                    <div className='grid grid-cols-2 justify-center items-center mt-10'>
                        <div>
                            <h1 className='text-[32px] text-[#000000e6]'>Keep your mind sharp with games</h1>
                            <p className='text-[20px] mt-[12px]'>Take a break and reconnect with your network through quick daily games.</p>
                        </div>
                        <div>
                            <div>
                                <button className='w-[122px] ml-[10px] h-[50px] rounded-full border-[#000] border-[1px]'>
                                    Pinpoint
                                </button>
                                <button className='w-[122px] ml-[10px] h-[50px] rounded-full border-[#000] border-[1px]'>
                                    Queens
                                </button>
                                <button className='w-[122px] ml-[10px] h-[50px] rounded-full border-[#000] border-[1px]'>
                                    Crossclimb
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' bg-[#F1ECE5]  w-[1903px] p-[40px] mt-10 mx-auto h-auto'>
                <div className=' max-w-[1158px] mx-auto h-auto'>
                    <div className='grid grid-cols-2 justify-center items-center mt-10'>
                        <div>
                            <h1 className='text-[32px] text-[#B24020]'>Keep your mind sharp with games</h1>
                            <p className='text-[20px] mt-[12px]'>With the Open To Work feature, you can privately tell recruiters
                                or publicly share with the LinkedIn community that you are looking for new job opportunities.</p>
                        </div>
                        <div>
                            <div>
                                <img
                                alt='dbvmcall'
                                    src={dbvmcall}
                                    className='w-[450px] h-[450px] ml-[40px]'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center mt-[80px] gap-[5rem]'>
                <div>
                    <img
                    alt='h6n82li4xu0q23s8jqizk6j'
                        src={h6n82li4xu0q23s8jqizk6j}
                        className='w-[356px] h-[256px]'
                    />
                    <h1 className='text-[32px]'>Connect with people who can help</h1>
                    <button className='w-[202px] h-[50px] mt-[12px] rounded-full border-[#000] border-[1px]'>
                        Find people you know
                    </button>
                </div>
                <div>
                    <img
                    alt='dhh8rr3wohexkaya6jhn2y8j'
                        src={dhh8rr3wohexkaya6jhn2y8j}
                        className='w-[356px] h-[256px]'
                    />
                    <h1 className='text-[32px] mb-[12px]'>Learn the skills you need to succeed</h1>
                    <Select className='w-[360px] h-[64px]'
                        options={topics.map(topic => ({
                            value: topic.value,
                            label: (
                                <div className="font-medium text-base">
                                    {topic.label}
                                    <br />
                                    <span className="text-sm text-gray-500">{topic.courses}</span>
                                </div>
                            ),
                        }))}
                        onChange={handleChange}
                        inputValue={inputValue}
                        onInputChange={(newValue) => setInputValue(newValue)}
                        placeholder="Choose a topic to learn about"
                        classNamePrefix="tailwind-select"
                    />
                </div>
            </div>
            <div className=" mt-[50px] flex items-center justify-center">
                <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 items-center lg:grid-cols-2 gap-8">
                    <div className='w-[900px] p-[180px] ml-[-210px] h-[700px] bg-[#ececec]'>
                        <div className="flex flex-col w-[800px] h-auto ml-[200px] justify-center space-y-6">
                            <h1 className="text-3xl text-red-600">
                                Who is LinkedIn for?
                            </h1>
                            <p className="text-lg text-gray-600">
                                Anyone looking to navigate their professional life.
                            </p>
                            <div className="space-y-4">
                                <button className="w-[400px] p-[16px] text-left bg-[#eae6df] text-gray-700 rounded-md flex justify-between items-center">
                                    Find a coworker or classmate
                                    <span className="text-black"><BsChevronRight /></span>
                                </button>
                                <button className="w-[400px] text-left bg-[#eae6df] text-gray-700  p-[16px] rounded-md flex justify-between items-center">
                                    Find a new job
                                    <span className="text-black"><BsChevronRight /></span>
                                </button>
                                <button className="w-[400px] text-left bg-[#eae6df] text-gray-700  p-[16px] rounded-md flex justify-between items-center">
                                    Find a course or training
                                    <span className="text-black"><BsChevronRight /></span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center mr-[-200px] items-center">
                        <div className="relative h-[840px] w-[840px] rounded-full overflow-hidden shadow-lg">
                            <img
                                src={eghb2zc0p5s2x42wbi80w4v8a}
                                alt="LinkedIn Professional"
                                className="h-[840px] w-[840px] object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[1000px] mr-[-0px] pt-[180px] mt-[60px] bg-[#e9f1f6] h-[700px] mx-auto'>
                <div className='flex gap-[2rem] items-center'>
                    <YouTubeEmbed videoId="dQw4w9WgXcQ" />
                    <div>
                        <h1 className='text-[32px]'>In it to chase my dream</h1>
                        <p className='text-[20px]'>Check out Gayatri’s story of finding a new job on LinkedIn</p>
                    </div>
                </div>
            </div>

            <div className='w-[992px] absolute mx-auto left-[415px] mt-[220px] h-auto '>
                <h1 className='text-[45px]'>Join your colleagues, classmates, and friends on LinkedIn.</h1>
                <button className='w-[150px] rounded-full h-[50px] bg-[#0A66C2] text-[#fff]'>Get started</button>
            </div>
            <img alt='bgimg' src={bgimg} className=' mt-[150px] '></img>
            <Footer />
        </div>
    )
}

export default Home
