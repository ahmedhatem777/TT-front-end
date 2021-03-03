import React, { useContext} from 'react';
import { IconContext } from 'react-icons';
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import UserContext from '../../userContext';
import './footer.styles.scss';

const Footer = () => {
    const user = useContext(UserContext);
    if(user.fetching) return null;
    
    return (
        <footer className="footer-div bg-primary text-white">
            <p><strong>Author: </strong>Ahmed Hatem</p>
            <a className="text-white" href="mailto:ahmedhatem777@hotmail.com">ahmedhatem777@hotmail.com</a>

            <div className="social-icons">
                <IconContext.Provider value={{ color: "white", size: "1.5em" }}>
                    <div className="icons">
                        <a 
                            className="social-icon" 
                            href="https://www.linkedin.com/in/ahmed-hatem-515751180/"
                            target="_blank"
                            rel="noopener noreferrer"
                        > 
                            <AiFillLinkedin /> 
                        </a>

                        <a 
                            className="social-icon"
                            href="https://github.com/ahmedhatem777" 
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