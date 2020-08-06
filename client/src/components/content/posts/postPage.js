import React, { useContext, useEffect, useState } from 'react';
import { PostContext } from '../../../providers/postContext';
import './postStyles.css';
import PostThumbnail from './postThumbnail';
import axios from 'axios';

const PostPage = () => {

    const { mobileCheckState } = useContext(PostContext);
    const isMobile = mobileCheckState;
    const [post, setPost] = useState([]);

    useEffect(() => {
        // get all post
        axios.get("/api/v1/post/")
            .then(allPost => {
                setPost(allPost.data)
            })
            .catch(err => {
                console.log(err);
            })

    }, []);

    return (
        <div className={"container text-slate " + (isMobile ? "pt-8" : "pt-10")}>
            {
                post.map((item) => (
                    <PostThumbnail key={item._id} id={item._id} title={item.title} date={item.date_created} overview={item.overview} />
                ))
            }
        </div>
    );
}

export default PostPage;