import React, { useContext } from 'react';
import { PostContext } from '../../../providers/postContext';
import './portfolio.css';

const Portfolio = () => {

    const { mobileCheckState } = useContext(PostContext);
    const isMobile = mobileCheckState;

    const projects = [
        {
            "src": "/portfolio/atvaudit-500x350.png",
            "title": "atvAudit",
            "body": "A fullstack web application that scans an Android device for all the packages currently installed in it and will highlight the application/s that had an update compared to the last time the atvAuto last scanned the same device device.",
            "stacks": ["React", "Node.js", "Express", "Shell.js", "ADB", "ContextAPI"],
            "link": "#"
        },
        {
            "src": "/portfolio/atvauto-500x350.png",
            "title": "atvAuto",
            "body": "This is an AndroidTV automation framework, mostly used to stress test an Android TV. This tool uses Android Debug Shell (ADB) through IP to control the device.",
            "stacks": ["Python", "ADB", "TKinter"],
            "link": "#"
        },
        {
            "src": "/portfolio/maddpass-500x350.png",
            "title": "madPass",
            "body": "A fullstack web password manager, it uses AES (Advanced Encryption System) algorithm with a 256-bit encryption key to encrypt all the data and hashes the master password.",
            "stacks": ["React", "Node.js", "Express", "Crypto", "JSONWebToken"],
            "link": "#"
        },
        {
            "src": "/portfolio/trivia-500x350.png",
            "title": "Trivia Game",
            "body": "",
            "stacks": [],
            "link": "#"
        },
        {
            "src": "/portfolio/word-500x350.png",
            "title": "Word Guess Game",
            "body": "",
            "stacks": [],
            "link": "#"
        },
        {
            "src": "/portfolio/scrape-500x350.png",
            "title": "Article Scraper",
            "body": "",
            "stacks": [],
            "link": "#"
        }
    ];

    const contentCreator = (pos, project) => {

        if (pos === "left") {
            return (
                <div className={"row mb-7 " + (isMobile ? " " : "mx-5")}>
                    <div className="col-lg-6">
                        <div className={(isMobile ? "text-center" : "text-right")}>
                            <img alt={project.title} src={project.src} className="img-fluid rounded" />
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className={"text-left " + (isMobile ? "pt-3 " : "mt-5 pt-3 pr-5")}>
                            <h3 className="text-slate-lightest">{project.title}</h3>
                            <p>{project.body + " "}
                                <a className="learn-more" target="_blank" rel="noopener noreferrer" href={project.link}>
                                    <span>Learn More</span>
                                </a>
                            </p>


                            <div className={"text-green small " + (isMobile ? "text-center" : " ")}>
                                {project.stacks.map((item) => (
                                    <span className={(isMobile ? "px-1" : "px-3")}>{item}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <hr className="project-hr mt-7" />
                </div>
            );
        } else {
            return (
                <div className={"row mb-7 " + (isMobile ? " " : "mx-5")}>
                    <div className="col-lg-6">
                        <div className={"text-right " + (isMobile ? "pt-3 " : "mt-5 pt-3 pl-5")}>
                            <h3 className="text-slate-lightest">{project.title}</h3>
                            <p>{project.body + " "}
                                <a className="learn-more" target="_blank" rel="noopener noreferrer" href={project.link}>
                                    <span>Learn More</span>
                                </a>
                            </p>
                            <div className={"text-green small " + (isMobile ? "text-center" : " ")}>
                                {project.stacks.map((item) => (
                                    <span className={(isMobile ? "px-1" : "px-3")}>{item}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className={(isMobile ? "text-center" : "text-left")}>
                            <img alt={project.title} src={project.src} className="img-fluid rounded" />
                        </div>
                    </div>
                    <hr className="project-hr mt-7" />
                </div >
            );
        }
    }

    const posPicker = (mod) => {
        if (mod === "mobile") {
            return "left";
        } else {
            if (mod % 2 === 0) {
                return "left";
            } else {
                return "right";
            }
        }
    }

    return (
        <div className={"container text-slate " + (isMobile ? "pt-8" : "pt-10")}>

            {
                projects.map((item, i) => (
                    contentCreator((isMobile ? posPicker("mobile") : posPicker(i)), item)
                ))
            }

        </div>
    );
}

export default Portfolio;