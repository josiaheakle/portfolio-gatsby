// react
import React, { useEffect, useState } from "react";

// components
import IconInfoBar from "./IconBar/IconInfoBar.js"
import AnimOnView from "./anim/AnimOnView.js"

const About = () => {

    const userHead = `Hello, I'm Josiah Eakle, `;
    const userBody = `Based in Knoxville TN, I help small buisnesses and individuals design, develop, and deploy their dream websites. 
    Equiped with powerful content managment solutions, my applications provide streamlined experiences for both administrators and users.`;

    const [activeIcon, setActiveIcon] = useState('user');
    const [headText, setHeadText] = useState(userHead);
    const [aboutBody, setAboutBody] = useState(<p className='about-body'>{userBody}</p>);


    const setIcon = (iconName) => {
        setActiveIcon(iconName)
    }

    useEffect(() => {
        switch (activeIcon) {
            case ('user'):
                setHeadText(userHead);
                setAboutBody(<p className='about-body'>{userBody}</p>)
                break;
            case ('computer'):
                setHeadText('Front-End');
                setAboutBody(
                    <span className='about-body'>Proficient in
                        <ul className='horizontal-list bold'>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>TypeScript</li>
                            <li>React.js</li>
                        </ul>
                        I push to create engaging and appealing application, catered to all users.
                    </span>
                );
                break;
            case ('database'):
                setHeadText('Back-End');
                setAboutBody(
                    <span className='about-body'>Any user authenticaion or data managment will inevitably require a back-end. Experienced in
                        <ul className='horizontal-list bold'>
                            <li>Node</li>
                            <li>Express</li>
                            <li>Sanity</li>
                            <li>PHP</li>
                        </ul>
                        easy content management and dynamic features can be implemented at any time.
                    </span>
                );
                break;
            case ('smartphone'):
                setHeadText('Mobile Friendly');
                setAboutBody(<span className='about-body'>
                    Everyone owns a smartphone, my designs emit
                    <ul className='horizontal-list bold'>
                        <li>Responsiveness </li>
                        <li>Easy-to-use UI </li>
                        <li>Straightforward UX </li>
                    </ul>
                    to provide clean experiences for both mobile and desktop users.
                </span>)
                break;
            case ('lock'):
                setHeadText('Security');
                setAboutBody(<span className='about-body'>
                    Managing data can be dangerous. When producing applications, my understanding of
                    <ul className='horizontal-list bold'>
                        <li>Token-Based Authenticaion</li>
                        <li>Session-Based Authenticaion</li>
                        <li>Password Encryption</li>
                    </ul>
                    will prove to be crucial.
                </span>)
                break;
            case ('upload'):
                setHeadText('Hosting and Management');
                setAboutBody(<span className='about-body'>
                    Building the project is only useful if you have the know-how to host your application. Understanding
                    <ul className='horizontal-list bold'>
                        <li>DNS Management</li>
                        <li>Hosting Platforms</li>
                        <li>Version Control</li>
                    </ul>
                    brings crucial skills to the table and can sheild you from confusing domain name management procedures.
                </span>)
                break;
            default:
                break;
        }
    }, [activeIcon])

    return (
        <div className='About align-center full-screen'>
            <AnimOnView>
                <h1> About Me </h1>
                <div className={`about-container ${activeIcon}`} >
                    <h2> {headText} </h2>
                    {aboutBody}
                </div>
                <IconInfoBar setActiveIcon={setIcon} />
            </AnimOnView>
        </div>
    );
}

export default About;