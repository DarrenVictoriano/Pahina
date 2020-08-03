import React, { useContext } from 'react';
import { PostContext } from '../../../providers/postContext';
import './postStyles.css';
import { useParams } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';
import ReactMarkdown from 'react-markdown';
import Moment from 'react-moment';

const PostBody = (props) => {

    const { id } = useParams();
    const { mobileCheckState } = useContext(PostContext);
    const isMobile = mobileCheckState;

    const dummyData = [
        {
            id: "123321",
            title: "Sample Title",
            date_created: "2020-08-02T22:01:11.218Z",
            overview: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
    ]

    return (
        <div className={"container " + (isMobile ? "mt-8" : "mt-10")}>
            <div className={"bg-navy-light container rounded " + (isMobile ? "p-3" : "p-5")}>
                <h1 className="text-slate-light mb-0">{dummyData[0].title}</h1>
                <p className="text-slate">
                    <Moment format="MMMM DD, YYYY" date={dummyData[0].date_created} />
                </p>
                <ReactMarkdown
                    source={dummyData[0].body}
                />

            </div>
        </div>

    );
}

export default PostBody;