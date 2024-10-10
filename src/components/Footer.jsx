import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn
} from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <hr />
      <footer>
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-10 my-10">
            <div className="flex flex-col justify-center items-center">
                <div className="flex space-x-4">
                    <FaFacebook size={24}/>
                    <FaTwitter size={24}/>
                    <FaInstagram size={24}/>
                    <FaLinkedinIn size={24}/>
                </div>
                <div className="border-t border-gray-700 mt-8 pt-8">
                    <p className="text-sm">&copy; 2024 Your Company. All rights reserved.</p>
                </div>
            </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
