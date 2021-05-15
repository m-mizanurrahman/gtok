import React from 'react';
// import Typed from "react-typed";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'; 


const Header = () => {
    return (
        <div className="header-wraper bg-dark">
            <div className="main-info">
                <h1>Welcome to Lets GTOK!</h1>
                <p className="text-white">Lets Gtok is a place to share personal experiences and find similarities each other. One can see similarities between friends, neighbors, or even aliens. Find people with like mindsets before commencing a talk.

10,000+ contacts in social networks, 1000+ contacts in chat apps, 100+ contacts in mobile but don't understand whom to discuss my favorite sports, food habits, health care, profession, job, life, dreams, and so on.

We know many, but we do not know whom. GTOK supports you share your thoughts and connect to those similar mindsets or experiences.</p>
                {/* <Typed
                    className="typed-text"
                    strings={["Junior React Js Developer", "Junior Full-Stack Developer", "Junior Front-End Developer", "Junior Back-End Developer"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                /> */}
                {/* <a href="https://drive.google.com/uc?export=download&id=1JXb1FHaKsks_HoabEnD6814HL1M_m3uh" className="btn-main-offer">Download Resume</a> */}
                <div>
                {/* <a className="m-2" target="_blank" href="https://github.com/m-mizanurrahman"><FontAwesomeIcon icon={faGithub} /></a>
                <a className="m-2" target="_blank" href="https://www.linkedin.com/in/mizanurrohman/"><FontAwesomeIcon icon={faLinkedin} /></a> */}
            </div>
            </div>
            
        </div>
    );
};

export default Header;