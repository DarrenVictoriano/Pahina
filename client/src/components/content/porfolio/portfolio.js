import React, { useContext } from 'react';
import { PostContext } from '../../../providers/postContext';
import Image from 'react-bootstrap/Image';

const Portfolio = () => {

    const { mobileCheckState } = useContext(PostContext);
    const isMobile = mobileCheckState;

    return (
        <div className="container mt-5">
            <div className="row mx-5 mb-5">
                <div className="col-sm-6">
                    <div className="text-right">
                        <img src="https://via.placeholder.com/500x350" className="img-fluid rounded" />
                    </div>
                </div>

                <div className="col-sm-6">
                    <div className="text-left mt-5 pt-5 pr-5">
                        <h3>atvAudit</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>

            {/* ------------------------------------------------------ */}

            <div className="row mx-5 mb-5">
                <div className="col-sm-6">
                    <div className="text-right mt-5 pt-5 pl-5">
                        <h3>atvAuto</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>

                <div className="col-sm-6">
                    <div className="text-left">
                        <img src="https://via.placeholder.com/500x350" className="img-fluid rounded" />
                    </div>
                </div>
            </div>

            {/* ------------------------------------------------------ */}

            <div className="row mx-5 mb-5">
                <div className="col-sm-6">
                    <div className="text-right">
                        <img src="https://via.placeholder.com/500x350" className="img-fluid rounded" />
                    </div>
                </div>

                <div className="col-sm-6">
                    <div className="text-left mt-5 pt-5 pr-5">
                        <h3>MadPass</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Portfolio;