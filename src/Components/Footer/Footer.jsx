import React from 'react';
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className=''>
            <footer className="bg-[url('https://i.postimg.cc/Qt3M5mxL/24.jpg')] bg-cover text-gray-800" >
                <div className=" bg-opacity-90 py-12 px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-10" style={{
                     backgroundImage: "url('https://i.postimg.cc/HnSWqC0H/13.jpg')"
                }}>
                    {/* Left Section */}
                    <div>
                        <div className="flex items-center mb-4">
                            <img src="https://i.postimg.cc/9FMQGrVf/logo1.png" alt="Logo" className="w-12 h-12 mr-2" />
                            <h2 className="text-2xl font-bold font-[Pacifico]">TEA HOUSE</h2>
                        </div>
                        <p className="mb-4 max-w-md text-sm md:text-base">
                            Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.
                        </p>

                        {/* Social Icons */}
                        <div className="flex space-x-4 mb-6">
                            <FaFacebook className="w-6 h-6 cursor-pointer hover:text-blue-600" />
                            <FaTwitter className="w-6 h-6 cursor-pointer hover:text-blue-400" />
                            <FaInstagram className="w-6 h-6 cursor-pointer hover:text-pink-600" />
                            <FaLinkedin className="w-6 h-6 cursor-pointer hover:text-blue-700" />
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2">
                                <FaPhone /> <span>+88 01533 333 333</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaEnvelope /> <span>info@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaMapMarkerAlt /> <span>72, Wall street, King Road, Dhaka</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Contact Form */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4 font-[Pacifico]">Connect with Us</h3>
                        <form className="space-y-4">
                            <input type="text" placeholder="Name" className="input input-bordered w-full bg-white" />
                            <input type="email" placeholder="Email" className="input input-bordered w-full bg-white" />
                            <textarea placeholder="Message" className="textarea textarea-bordered w-full bg-white" rows="4"></textarea>
                            <button type="submit" className="btn border border-black hover:text-black hover:bg-gray-100">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

                {/* Copyright */}
                <div className="bg-[#2e1e17] text-white text-center py-3 text-sm">
                    © Copyright Espresso Emporium | All Rights Reserved
                </div>
            </footer>
        </div>
    );
};

export default Footer;