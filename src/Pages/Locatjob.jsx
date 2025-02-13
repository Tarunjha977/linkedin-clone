import React, { useState } from 'react';
import LinkedinLogo from '../assets/LinkedinLogo.png';
import linkedinblack from '../assets/linkedinblack.png';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Student from './Student';

const Locatjob = () => {
    const [selectedLocation, setSelectedLocation] = useState('');
    const [selectedJobTitle, setSelectedJobTitle] = useState('');
    const [selectedcompany, setSelectedcompany] = useState('');
    const [activeTab, setActiveTab] = useState(0);
    const handleLocationChange = (e) => {
        setSelectedLocation(e.target.value);
    };

    const handleJobTitleChange = (e) => {
        setSelectedJobTitle(e.target.value);
    };

    const handleCompany = (e) => {
        setSelectedcompany(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Selected location:', selectedLocation);
        console.log('Selected job title:', selectedJobTitle);
        console.log('Selected Company title:', selectedcompany);
    };

    const isButtonDisabled = !selectedLocation || !selectedJobTitle || !selectedcompany;

    const handleAgreeAndJoin = () => {

        setActiveTab(1);

    };
    return (
        <div className='w-[1128px] h-[695px] mx-auto'>
            <ToastContainer />
            <img
                alt='Linkedin logo'
                src={LinkedinLogo}
                className='w-[135px] h-[78px] mt-[32px] ml-14'
            />
            <h1 className='text-[24px] text-center w-[600px] m-auto text-[#000000E6] font-semibold mb-[20px]'>
                Your profile helps you discover new people and opportunities
            </h1>
            <div>
            {activeTab === 0 ? (
                <div>
                <div className='w-[400px] h-auto p-[20px] mx-auto mb-[25px]'>
                
                        <div>
                            <h1 className='text-[#00000099] font-medium text-[14px] mb-[5px]'>Location *</h1>
                            <div className="flex mb-[15px] items-center leading-[1.33333] p-[15px] font-normal text-black/90 border-[#0009] relative z-[1] w-[360px] h-[30px] border-[#000] border-[1px] rounded-[3px]">
                                <select
                                    id="location"
                                    value={selectedLocation}
                                    onChange={handleLocationChange}
                                    className="flex-grow text-[15px] focus:outline-none"
                                >
                                    <option value="" disabled>Select a location</option>
                                    <option value="new_york">America</option>
                                    <option value="bhutan">Bhutan</option>
                                    <option value="china">China</option>
                                    <option value="denmark">Denmark</option>
                                    <option value="ecuador">Ecuador</option>
                                    <option value="france">France</option>
                                    <option value="gabon">Gabon</option>
                                    <option value="hungary">Hungary</option>
                                    <option value="india">India</option>
                                    <option value="japan">Japan</option>
                                    <option value="kenya">Kenya</option>
                                    <option value="laos">Laos</option>
                                    <option value="malawi">Malawi</option>
                                    <option value="oman">New York</option>
                                    <option value="los_angeles">Oman</option>
                                    <option value="pakistan">Pakistan</option>
                                    <option value="qatar">Qatar</option>
                                    <option value="russia">Russia</option>
                                    <option value="sri_lanka">Sri Lanka</option>
                                    <option value="taiwan">Taiwan</option>
                                    <option value="uganda">Uganda</option>
                                    <option value="vatican_city">Vatican City</option>
                                    <option value="yemen">Yemen</option>
                                    <option value="zambia">Zambia</option>
                                </select>
                            </div>
                            <h1 className='text-[#00000099] font-medium text-[14px] mb-[5px]'>Most recent job title *</h1>
                            <div className="flex mb-[15px] items-center leading-[1.33333] p-[15px] font-normal text-black/90 border-[#0009] relative z-[1] w-[360px] h-[30px] border-[#000] border-[1px] rounded-[3px]">
                                <select
                                    id="jobTitle"
                                    value={selectedJobTitle}
                                    onChange={handleJobTitleChange}
                                    className="flex-grow text-[15px] focus:outline-none"
                                >
                                    <option value="" disabled>Select a job title</option>
                                    <option value="software_engineer">Software Engineer</option>
                                    <option value="data_scientist">Data Scientist</option>
                                    <option value="product_manager">Product Manager</option>
                                    <option value="ux_designer">UX Designer</option>
                                    <option value="devops_engineer">DevOps Engineer</option>
                                </select>
                            </div>

                            <h1 className='text-[#00000099] font-medium text-[14px] mb-[5px]'>Most recent company *</h1>
                            <div className="flex mb-[15px] items-center leading-[1.33333] p-[15px] font-normal text-black/90 border-[#0009] relative z-[1] w-[360px] h-[30px] border-[#000] border-[1px] rounded-[3px]">
                                <select
                                    id="company"
                                    value={selectedcompany}
                                    onChange={handleCompany}
                                    className="flex-grow text-[15px] focus:outline-none"
                                >
                                    <option value="" disabled>Select a company</option>
                                    <option value="nestle_india">Nestle India</option>
                                    <option value="pg_hygiene">P & G Hygiene</option>
                                    <option value="colgate">Colgate-Palmolive</option>
                                    <option value="life_insurance">Life Insurance</option>
                                    <option value="reliance">Reliance Industries Ltd.</option>
                                    <option value="indian_oil">Indian Oil Corporation Ltd.</option>
                                    <option value="ongc">Oil And Natural Gas Corporation Ltd.</option>
                                    <option value="bpcl">Bharat Petroleum Corporation Ltd.</option>
                                </select>
                            </div>
                            <button
                                onClick={handleAgreeAndJoin}
                                className="w-[362px] h-[48px] text-center duration-100 text-[#222] rounded-[10px] mb-[20px] hover:bg-[#f3f3f3] font-semibold text-[20px] cursor-pointer"
                            >
                                I’m a student
                            </button>
                            <button
                                onClick={handleSubmit}
                                disabled={isButtonDisabled}
                                className={`w-[362px] h-[48px] text-center text-[#fff] font-medium rounded-full mb-[20px] ${isButtonDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#0A66C2]'}`}
                            >
                                Continue
                            </button>
                        </div>                   
                </div>
                <div className='flex justify-center items-center gap-4 text-[15px] mt-[28%]'>
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
                        <Student />
                    )}
                
            </div>
        </div>
    );
}

export default Locatjob;
