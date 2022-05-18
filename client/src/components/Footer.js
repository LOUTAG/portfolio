import React from "react";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = ()=>{
    return(
        <div className="mt-10">
            <div className="bg-theme p-5 text-white flex justify-center">
                <div className="sm:w-1/2">
                    <p className="my-4 text-center font-montserrat">Designed and Developed By Lou Tagliasco</p>
                    <div className="flex justify-center text-center space-x-8">
                        <a href='https://github.com/LOUTAG/' target="_blank" rel="noopener noreferrer" title='GitHub'>
                            <FaGithub size={40} />
                        </a> 
                        <a href='https://www.linkedin.com/in/lou-tagliasco/' target="_blank" rel="noopener noreferrer" title='Linkedin'>
                            <FaLinkedin size={40} />
                        </a> 
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Footer;