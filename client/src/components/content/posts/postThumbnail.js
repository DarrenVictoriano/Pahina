import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PostContext } from '../../../providers/postContext';
import Button from 'react-bootstrap/Button';

const PostThumbnail = ({ id, title, overview }) => {

    const { mobileCheckState } = useContext(PostContext);
    const isMobile = mobileCheckState;

    return (
        <div className={"bg-navy-light rounded container " + (isMobile ? "p-3 mb-3" : "p-5 mb-5")}>

            <h1 className={"text-slate-light "}>{title}</h1>
            <p className={"text-slate-light"}>{overview}</p>
            <Link exact to={"/post/" + id} className={"read-article text-slate-lighter "}>Read Article</Link>
        </div>
    );
}

export default PostThumbnail;