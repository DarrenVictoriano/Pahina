import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PostContext } from '../../../providers/postContext';
import Moment from 'react-moment';
import Button from 'react-bootstrap/Button';

const PostThumbnail = ({ id, title, overview, date }) => {

    const { mobileCheckState } = useContext(PostContext);
    const isMobile = mobileCheckState;

    return (
        <div className={"bg-navy-light rounded container " + (isMobile ? "p-3 mb-3" : "p-5 mb-5")}>
            <div className="row">
                <div className="col-lg-11">
                    <h1 className={"text-slate-lighter mb-0"}>{title}</h1>
                    <p className={"text-slate-light"}><Moment format="MMMM DD, YYYY" date={date} /></p>
                    <p className={"text-slate-light"}>{overview}</p>
                    <Link exact to={"/blog/" + id} className={"read-article text-slate-lighter "}>Read Article</Link>
                </div>
                <div className={"col-lg-1 " + (isMobile ? "mt-2" : "")}>
                    <Button className={"btn-sm btn-size " + (isMobile ? "mr-3" : "mb-3")}>
                        Edit
                    </Button>
                    <Button className="btn-danger btn-sm btn-size ">
                        Delete
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default PostThumbnail;