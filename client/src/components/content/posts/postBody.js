import React, { useContext, useState, useEffect } from 'react';
import { PostContext } from '../../../providers/postContext';
import './postStyles.css';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import Moment from 'react-moment';
import axios from 'axios';

const PostBody = (props) => {

    const { id } = useParams();
    const { mobileCheckState } = useContext(PostContext);
    const [post, setPost] = useState({});

    const isMobile = mobileCheckState;

    useEffect(() => {
        axios.get("/api/v1/post/" + id)
            .then(item => {
                setPost(item.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, [])


    return (
        <div className={"container " + (isMobile ? "mt-8" : "mt-10")}>
            <div className={"bg-navy-light container rounded " + (isMobile ? "p-3" : "p-5")}>
                <h1 className="text-slate-light mb-0">{post.title}</h1>
                <p className="text-slate">
                    <Moment format="MMMM DD, YYYY" date={post.date_created} />
                </p>
                <ReactMarkdown
                    source={post.body}
                />

            </div>
        </div>

    );
}

export default PostBody;