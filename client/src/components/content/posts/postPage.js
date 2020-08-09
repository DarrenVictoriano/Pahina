import React, { useContext, useEffect } from 'react';
import { PostContext } from '../../../providers/postContext';
import './postStyles.css';
import '../../../App.css';
import PostThumbnail from './postThumbnail';
import axios from 'axios';

const PostPage = () => {

    const { mobileCheckState, allPostState } = useContext(PostContext);
    const isMobile = mobileCheckState;
    const [allPost, setAllPost] = allPostState;

    useEffect(() => {
        // get all post
        axios.get("/api/v1/post/")
            .then(allPost => {
                setAllPost(allPost.data)
            })
            .catch(err => {
                console.log(err);
            })

    }, []);

    return (
        <div className={"container text-slate " + (isMobile ? "pt-8" : "pt-10")}>
            {
                allPost.map((item) => (
                    <PostThumbnail key={item._id} id={item._id} title={item.title} date={item.date_created} overview={item.overview} />
                ))
            }
        </div>
    );
}

export default PostPage;