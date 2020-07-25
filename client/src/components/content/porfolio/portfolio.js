import React, { useContext } from 'react';
import { PostContext } from '../../../providers/postContext';
import './portfolio.css';

const Portfolio = () => {

    const { mobileCheckState } = useContext(PostContext);
    const isMobile = mobileCheckState;

    const atvAuditSRC = "/portfolio/atvaudit-500x350.png";
    const atvAuditBody = "A fullstack web application that scans an Android device for all the packages currently installed in it and will highlight the application/s that had an update compared to the last time the atvAuto last scanned the same device device."
    const atvAuditStack = ["React", "Node.js", "Express", "Shell.js", "ADB", "ContextAPI"];
    const atvAuditLink = "";

    const atvAutoSRC = "/portfolio/atvauto-500x350.png";
    const atvAutoBody = "This is an AndroidTV automation framework, mostly used to stress test an Android TV. This tool uses Android Debug Shell (ADB) through IP to control the device.";
    const atvAutoStack = ["Python", "ADB", "TKinter"];
    const atvAutoLink = "";

    const madPassSRC = "/portfolio/maddpass-500x350.png";
    const madPassBody = "A fullstack web password manager, it uses AES (Advanced Encryption System) algorithm with a 256-bit encryption key to encrypt all the data and hashes the master password.";
    const madPassStack = ["React", "Node.js", "Express", "Crypto", "JSONWebToken"];
    const madPassLink = "";

    const triviaGameSRC = "/portfolio/trivia-500x350.png";
    const triviaGameBody = "";
    const triviaGameStack = [];
    const triviaGameLink = "";

    const wordGameSRC = "/portfolio/word-500x350.png";
    const wordGameBody = "";
    const wordGameStack = [];
    const wordGameLink = "";

    const scrapNewsSRC = "/portfolio/scrape-500x350.png";
    const scrapNewsBody = "";
    const scrapNewsStack = [];
    const scrapNewsLink = "";

    const contentCreator = (pos, src, title, body, stacks = [], link) => {

        if (pos === "left") {
            return (
                <div className={"row mb-5 " + (isMobile ? " " : "mx-5")}>
                    <div className="col-lg-6">
                        <div className={(isMobile ? "text-center" : "text-right")}>
                            <img src={src} className="img-fluid rounded" />
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className={"text-left " + (isMobile ? "pt-3 " : "mt-5 pt-3 pr-5")}>
                            <h3 className="title-color">{title}</h3>
                            <p>{body + " "}
                                <a href={link}>
                                    <span>Learn More</span>
                                </a>
                            </p>


                            <div className={"text-white small " + (isMobile ? "text-center" : " ")}>
                                {stacks.map((item) => (
                                    <span className={(isMobile ? "px-1" : "px-3")}>{item}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className={"row mb-5 " + (isMobile ? " " : "mx-5")}>
                    <div className="col-lg-6">
                        <div className={"text-right " + (isMobile ? "pt-3 " : "mt-5 pt-3 pl-5")}>
                            <h3 className="title-color">{title}</h3>
                            <p>{body + " "}
                                <a href={link}>
                                    <span>Learn More</span>
                                </a>
                            </p>
                            <div className={"text-white small " + (isMobile ? "text-center" : " ")}>
                                {stacks.map((item) => (
                                    <span className={(isMobile ? "px-1" : "px-3")}>{item}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className={(isMobile ? "text-center" : "text-left")}>
                            <img src={src} className="img-fluid rounded" />
                        </div>
                    </div>
                </div >
            );
        }
    }

    return (
        <div className={"container " + (isMobile ? "mt-3" : "mt-5")}>

            {contentCreator("left", atvAuditSRC, "atvAudit", atvAuditBody, atvAuditStack, "#")}

            {/* ------------------------------------------------------ */}

            {isMobile ? contentCreator("left", atvAutoSRC, "atvAuto", atvAutoBody, atvAutoStack, "#")
                : contentCreator("right", atvAutoSRC, "atvAuto", atvAutoBody, atvAutoStack, "#")}

            {/* ------------------------------------------------------ */}

            {contentCreator("left", madPassSRC, "madPass", madPassBody, madPassStack, "#")}

        </div>
    );
}

export default Portfolio;