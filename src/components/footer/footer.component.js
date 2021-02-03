import React from 'react';
import './footer.styles.scss';
import { IconContext } from 'react-icons';
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Footer = () => {
    return (
        <footer className="footer-div bg-primary text-white">
            <p><strong>Made By: </strong>Ahmed Hatem</p>
            <a className="text-white" href="mailto:ahmedhatem777@hotmail.com">ahmedhatem777@hotmail.com</a>

            <div className="social-icons">
                <IconContext.Provider value={{ color: "white", size: "1.5em" }}>
                    <div className="icons">
                        <a 
                            className="social-icon" 
                            href="https://www.google.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        > 
                            <AiFillLinkedin /> 
                        </a>

                        <a 
                            className="social-icon"
                            href="https://www.google.com" 
                            target="_blank"
                            rel="noopener noreferrer"
                        > 
                            <AiFillGithub />
                        </a>
                    </div>
                </IconContext.Provider>
            </div>
        </footer>               
    )
}

export default Footer;