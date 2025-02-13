import React from "react";
import LinkedinLogo from '../assets/LinkedinLogo.png'
import linkedinblack from '../assets/linkedinblack.png'
const Footer = () => {
    return (
        <footer>
            <div className="bg-gray-100 py-10 border-t border-gray-300">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between">
                        {/* Logo */}
                        <div>
                            <img
                                alt='Linkedin logo'
                                src={LinkedinLogo}
                                className='w-[110px] h-[58px] '
                            />
                        </div>
                        {/* Footer Links */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-[5rem]">
                            {/* General */}
                            <div>
                                <h5 className="text-[16px] mb-[8px] font-semibold text-gray-800">General</h5>
                                <ul className=" space-y-2">
                                    <li><a href="#" className="text-gray-600 text-[14px] leading-[28px] hover:underline">Sign Up</a></li>
                                    <li><a href="#" className="text-gray-600 text-[14px] leading-[28px] hover:underline">Help Center</a></li>
                                    <li><a href="#" className="text-gray-600 text-[14px] leading-[28px] hover:underline">About</a></li>
                                    <li><a href="#" className="text-gray-600 text-[14px] leading-[28px] hover:underline">Press</a></li>
                                    <li><a href="#" className="text-gray-600 text-[14px] leading-[28px] hover:underline">Blog</a></li>
                                    <li><a href="#" className="text-gray-600 text-[14px] leading-[28px] hover:underline">Careers</a></li>
                                    <li><a href="#" className="text-gray-600 text-[14px] leading-[28px] hover:underline">Developers</a></li>
                                </ul>
                            </div>
                            {/* Browse LinkedIn */}
                            <div>
                                <h5 className="text-[16px] mb-[8px] font-semibold text-gray-800">Browse LinkedIn</h5>
                                <ul className=" space-y-2">
                                    <li><a href="#" className="text-gray-600 text-[14px] leading-[28px] hover:underline">Learning</a></li>
                                    <li><a href="#" className="text-gray-600 text-[14px] leading-[28px] hover:underline">Jobs</a></li>
                                    <li><a href="#" className="text-gray-600 text-[14px] leading-[28px] hover:underline">Games</a></li>
                                    <li><a href="#" className="text-gray-600 text-[14px] leading-[28px] hover:underline">Salary</a></li>
                                    <li><a href="#" className="text-gray-600 text-[14px] leading-[28px] hover:underline">Mobile</a></li>
                                    <li><a href="#" className="text-gray-600 text-[14px] leading-[28px] hover:underline">Services</a></li>
                                    <li><a href="#" className="text-gray-600 text-[14px] leading-[28px] hover:underline">Products</a></li>
                                    <li><a href="#" className="text-gray-600 text-[14px] leading-[28px] hover:underline">Top Companies Hub</a></li>
                                </ul>
                            </div>
                            {/* Business Solutions */}
                            <div>
                                <h5 className="text-[16px] mb-[8px] font-semibold text-gray-800">Business Solutions</h5>
                                <ul className=" space-y-2">
                                    <li><a href="#" className="text-gray-600 text-[14px] leading-[28px] hover:underline">Talent</a></li>
                                    <li><a href="#" className="text-gray-600 text-[14px] leading-[28px] hover:underline">Marketing</a></li>
                                    <li><a href="#" className="text-gray-600 text-[14px] leading-[28px] hover:underline">Sales</a></li>
                                    <li><a href="#" className="text-gray-600 text-[14px] leading-[28px] hover:underline">Learning</a></li>
                                </ul>
                            </div>
                            {/* Directories */}
                            <div>
                                <h5 className="text-[16px] mb-[8px] font-semibold text-gray-800">Directories</h5>
                                <ul className=" space-y-2">
                                    <li><a href="#" className="text-gray-600 text-[14px] leading-[28px] hover:underline">Members</a></li>
                                    <li><a href="#" className="text-gray-600 text-[14px] leading-[28px] hover:underline">Jobs</a></li>
                                    <li><a href="#" className="text-gray-600 text-[14px] leading-[28px] hover:underline">Companies</a></li>
                                    <li><a href="#" className="text-gray-600 text-[14px] leading-[28px] hover:underline">Featured</a></li>
                                    <li><a href="#" className="text-gray-600 text-[14px] leading-[28px] hover:underline">Learning</a></li>
                                    <li><a href="#" className="text-gray-600 text-[14px] leading-[28px] hover:underline">Posts</a></li>
                                    <li><a href="#" className="text-gray-600 text-[14px] leading-[28px] hover:underline">Articles</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Footer Bottom */}
                    {/* <div className="mt-8 border-t pt-6 text-sm text-gray-500 flex justify-between">
          <p>&copy; 2024 LinkedIn</p>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Accessibility</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Cookie Policy</a></li>
            <li><a href="#" className="hover:underline">User Agreement</a></li>
            <li><a href="#" className="hover:underline">Guest Controls</a></li>
            <li><a href="#" className="hover:underline">Language</a></li>
          </ul>
        </div> */}

                </div>
            </div>
            <div className='flex justify-center items-center gap-4 text-[15px] mb-[1%] mt-[1%]'>
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
        </footer>
    );
};

export default Footer;
