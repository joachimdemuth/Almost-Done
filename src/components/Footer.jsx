import React from "react";
import "./Footer.css";
import logo from '../assets/icons/niji.svg';
import { Link } from 'react-router-dom';
import { SocialIcon } from "react-social-icons";
import useBreakpoints from '../consts/useBreakpoints';

function Footer() {
    const { isXs } = useBreakpoints();
    return (
        <footer>
            <div className="footer-container">

            <div className="logo-container">
                <img src={logo} alt="Logo" />
                <h4 className="logo">
            <Link to="/almost-done">
                Almost Done
                </Link>
            </h4>
            </div>

            <div className="copyright-container">
                <h4>© 2022 Almost Done</h4>
            </div>

            <div className="social-container">
                <SocialIcon 
                style={isXs ? {width:"32px", height:"32px"} : {}}
                target="_blank" className="social" url="https://twitter.com/poetenpoul" bgColor="transparent" fgColor="blue" />
                <SocialIcon style={isXs ? {width:"32px", height:"32px"} : {}} target="_blank" className="social" url="https://instagram.com/_joachimdemuth" bgColor="transparent" fgColor="blue" />
                <SocialIcon style={isXs ? {width:"32px", height:"32px"} : {}} target="_blank" className="social" url="https://www.linkedin.com/in/joachimdemuth/" bgColor="transparent" fgColor="blue" />
            </div>
            </div>
        </footer>
        )
}

export default Footer;