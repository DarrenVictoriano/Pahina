import React, { useContext } from 'react';
import { PostContext } from '../../../providers/postContext';
import './postStyles.css';
import PostThumbnail from './postThumbnail';

const PostPage = () => {

    const { mobileCheckState } = useContext(PostContext);
    const isMobile = mobileCheckState;

    const dummyData = [
        {
            id: "12323",
            title: "Sample Title",
            overview: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
    ]

    return (
        <div className={"container text-slate " + (isMobile ? "pt-8" : "pt-10")}>
            <PostThumbnail id={dummyData[0].id} title={dummyData[0].title} overview={dummyData[0].overview} />

            <PostThumbnail id={dummyData[0].id} title={dummyData[0].title} overview={dummyData[0].overview} />

            <PostThumbnail id={dummyData[0].id} title={dummyData[0].title} overview={dummyData[0].overview} />
        </div>
    );
}

export default PostPage;