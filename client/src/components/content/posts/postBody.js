import React, { useContext, useState, useEffect } from 'react';
import { PostContext } from '../../../providers/postContext';
import './postStyles.css';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import Moment from 'react-moment';
import axios from 'axios';
// import MarkdownIt from 'markdown-it';
// import hljs from 'highlight.js';

const PostBody = (props) => {

    // get the ID from the URL
    const { id } = useParams();

    const { mobileCheckState } = useContext(PostContext);
    const [post, setPost] = useState({});

    const isMobile = mobileCheckState;

    // TODO: fix mardown with syntax highlighting
    // let md = MarkdownIt()({
    //     highlight: function (str, lang) {
    //         if (lang && hljs.getLanguage(lang)) {
    //             try {
    //                 return '<pre class="hljs"><code>' +
    //                     hljs.highlight(lang, str, true).value +
    //                     '</code></pre>';
    //             } catch (__) { }
    //         }

    //         return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
    //     }
    // });

    useEffect(() => {
        axios.get("/api/v1/post/" + id)
            .then(item => {
                setPost(item.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, [id])


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
                {/* {md.render(post.body)} */}

            </div>
        </div>

    );
}

export default PostBody;