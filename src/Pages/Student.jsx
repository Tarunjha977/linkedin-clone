import React, { useState } from 'react';
import linkedinblack from '../assets/linkedinblack.png';
import Switch from '@mui/material/Switch';
const label = { inputProps: { 'aria-label': 'Switch demo' } };
const Student = () => {
    const [selectedLocation, setSelectedLocation] = useState('');
    const [selectedUniversity, setSelectedUniversity] = useState('');
    const [selectedStartYear, setSelectedStartYear] = useState('');
    const [selectedEndYear, setSelectedEndYear] = useState('');

    const handleLocationChange = (e) => {
        setSelectedLocation(e.target.value);
    };

    const handleUniversityChange = (e) => {
        setSelectedUniversity(e.target.value);
    };

    const handleStartYearChange = (e) => {
        setSelectedStartYear(e.target.value);
    };

    const handleEndYearChange = (e) => {
        setSelectedEndYear(e.target.value);
    };

    const handleSubmit = () => {
        console.log('Form submitted');
    };

    const isButtonDisabled = !(selectedLocation && selectedUniversity && selectedStartYear && selectedEndYear);

    return (
        <div>
            <div className='w-[400px] h-auto p-[20px] mx-auto mb-[25px]'>
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
                <h1 className='text-[#00000099] font-medium text-[14px] mb-[5px]'>School or College/University *</h1>
                <div className="flex mb-[15px] items-center leading-[1.33333] p-[15px] font-normal text-black/90 border-[#0009] relative z-[1] w-[360px] h-[30px] border-[#000] border-[1px] rounded-[3px]">
                    <select
                        id="university"
                        value={selectedUniversity}
                        onChange={handleUniversityChange}
                        className="flex-grow text-[15px] focus:outline-none"
                    >
                        <option value="" disabled>Select a College/University</option>
                        <option value="nestle_india">University of Oxford, UK.</option>
                        <option value="pg_hygiene">Harvard University, USA.</option>
                        <option value="colgate">University of Cambridge, UK.</option>
                        <option value="life_insurance">ETH Zurich, Switzerland.</option>
                        <option value="reliance">P. P. Savani University India, Gujarat, Surat.</option>
                        <option value="indian_oil">Uka Tarsadia University India, Gujarat, Surat.</option>
                        <option value="ongc">Auro University India, Gujarat, Surat.</option>
                        <option value="bpcl">Gujarat Technological University India, Gujarat.</option>
                    </select>
                </div>
                <div className='flex items-center justify-between'>
                    <div>
                        <h1 className='text-[#00000099] font-medium text-[14px] mb-[5px]'>Start year *</h1>
                        <div className="flex mb-[15px] items-center leading-[1.33333] p-[15px] font-normal text-black/90 border-[#0009] relative z-[1] w-[160px] h-[30px] border-[#000] border-[1px] rounded-[3px]">
                            <select
                                id="start-year"
                                value={selectedStartYear}
                                onChange={handleStartYearChange}
                                className="flex-grow text-[15px] focus:outline-none"
                            >
                                <option value="" disabled>==</option>
                                <option value="2024">2024</option>
                                <option value="2023">2023</option>
                                <option value="2022">2022</option>
                                <option value="2021">2021</option>
                                <option value="2020">2020</option>
                                <option value="2019">2019</option>
                                <option value="2018">2018</option>
                                <option value="2017">2017</option>
                                <option value="2016">2016</option>
                                <option value="2015">2015</option>
                                <option value="2014">2014</option>
                                <option value="2013">2013</option>
                                <option value="2012">2012</option>
                                <option value="2011">2011</option>
                                <option value="2010">2010</option>
                                <option value="2009">2009</option>
                                <option value="2008">2008</option>
                                <option value="2007">2007</option>
                                <option value="2006">2006</option>
                                <option value="2005">2005</option>
                                <option value="2004">2004</option>
                                <option value="2003">2003</option>
                                <option value="2002">2002</option>
                                <option value="2001">2001</option>
                                <option value="2000">2000</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-[#00000099] font-medium text-[14px] mb-[5px]'>End year (or expected) *</h1>
                        <div className="flex mb-[15px] items-center leading-[1.33333] p-[15px] font-normal text-black/90 border-[#0009] relative z-[1] w-[160px] h-[30px] border-[#000] border-[1px] rounded-[3px]">
                            <select
                                id="end-year"
                                value={selectedEndYear}
                                onChange={handleEndYearChange}
                                className="flex-grow text-[15px] focus:outline-none"
                            >
                                <option value="" disabled>==</option>
                                <option value="2024">2024</option>
                                <option value="2023">2023</option>
                                <option value="2022">2022</option>
                                <option value="2021">2021</option>
                                <option value="2020">2020</option>
                                <option value="2019">2019</option>
                                <option value="2018">2018</option>
                                <option value="2017">2017</option>
                                <option value="2016">2016</option>
                                <option value="2015">2015</option>
                                <option value="2014">2014</option>
                                <option value="2013">2013</option>
                                <option value="2012">2012</option>
                                <option value="2011">2011</option>
                                <option value="2010">2010</option>
                                <option value="2009">2009</option>
                                <option value="2008">2008</option>
                                <option value="2007">2007</option>
                                <option value="2006">2006</option>
                                <option value="2005">2005</option>
                                <option value="2004">2004</option>
                                <option value="2003">2003</option>
                                <option value="2002">2002</option>
                                <option value="2001">2001</option>
                                <option value="2000">2000</option>
                            </select>
                        </div>
                    </div>

                </div>
                <div className='w-[358px] border-[1px] h-[58px] p-[10px]'>
                    <div className='flex justify-center gap-[11rem] items-center m-auto'>
                        <h1>I’m over 16</h1>
                        <Switch {...label} defaultChecked />
                    </div>
                </div>
                <button
                    // onClick={handleAgreeAndJoin}
                    className="w-[362px] h-[48px] text-center duration-100 text-[#222] rounded-[10px] mb-[20px] hover:bg-[#f3f3f3] font-semibold text-[20px] cursor-pointer"
                >
                    I’m not a student
                </button>
                <button
                    onClick={handleSubmit}
                    disabled={isButtonDisabled}
                    className={`w-[362px] h-[48px] text-center text-[#fff] font-medium rounded-full ${isButtonDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#0A66C2]'}`}
                >
                    Continue
                </button>
            </div>
            <div className='flex justify-center items-center gap-4 text-[15px] mt-[26%]'>
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
    );
};

export default Student;
