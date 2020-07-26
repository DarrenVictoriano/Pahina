import React, { useContext } from 'react';
import { PostContext } from '../../../providers/postContext';
import './home.css';

const Home = () => {

    const { mobileCheckState } = useContext(PostContext);
    const isMobile = mobileCheckState;

    return (
        <div className={"text-center " + (isMobile ? "home-content-mb" : "home-content")}>
            <p className={"text-light mb-0 p-0 " + (isMobile ? "home-content-title-mb" : "home-content-title")}>
                Software Engineer
        </p>
            <hr className={(isMobile ? "title-hr-mb" : "title-hr")} />
            <p className={"text-muted " + (isMobile ? "home-content-desc-mb mx-2" : "lead")}>
                Specializing in test automation and developing FullStack web application.
        </p>
            <div className="media-icons">
                <a href="https://www.linkedin.com/in/darren-victoriano/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin fa-2x"></i>
                </a>
                <a href="https://github.com/DarrenVictoriano" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github fa-2x"></i>
                </a>
                {/* <a href="images/VR040.pdf" target="_blank">
            <i class="fas fa-file-alt fa-2x"></i>
          </a> */}
                <a href="mailto:darren.victoriano@gmail.com">
                    <i className="fas fa-envelope fa-2x"></i>
                </a>
            </div>
        </div>
    );
}

export default Home;