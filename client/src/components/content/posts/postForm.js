import React, { useContext, useState, useEffect } from 'react';
import { PostContext } from '../../../providers/postContext';
import './postStyles.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const PostForm = (props) => {

    const { mobileCheckState, userIDState } = useContext(PostContext);
    const isMobile = mobileCheckState;
    const [cookies] = useCookies(['token', 'userID']);
    const [userID, setUserID] = userIDState;

    const [markdownTitle, setMarkdownTitle] = useState("");
    const [markdownBody, setMarkDownBody] = useState("");

    let history = useHistory();

    // get the ID from the URL
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            // get one post
            axios.get("/api/v1/post/" + id)
                .then(item => {
                    setMarkdownTitle(item.data.title);
                    setMarkDownBody(item.data.body);
                })
                .catch(err => {
                    setMarkdownTitle("");
                    setMarkDownBody("");
                })
        }
    }, []);

    const handlePublish = (event) => {
        event.preventDefault();

        // build data
        let data = {
            "_id": userID,
            "title": markdownTitle,
            "overview": markdownBody.length > 100 ? markdownBody.slice(0, 200) : markdownBody,
            "body": markdownBody
        }

        // build header
        let headerConfig = {
            "headers": {
                "x-header-token": cookies.token
            }
        }

        if (id) {
            // do some edits
            axios.put("/api/v1/post/" + id, data, headerConfig)
                .then(updatedItem => {
                    // view the article
                    history.push("/blog/" + id);
                })
                .catch(err => {
                    console.log(err);
                });
        } else {
            // save as new
            axios.post("/api/v1/post", data, headerConfig)
                .then(itemPosted => {
                    // then view the article
                    history.push("/blog/" + itemPosted.data._id);
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }

    return (
        <div className={"container-fluid " + (isMobile ? "mt-8" : "mt-10")}>
            <div className="row">
                <div className="col-lg-6">
                    <Form>
                        <Form.Group controlId="postFormTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter title"
                                value={markdownTitle}
                                onChange={e => setMarkdownTitle(e.target.value)} />
                        </Form.Group>

                        <Form.Group controlId="formBasicBody">
                            <Form.Label>Body</Form.Label>
                            <Form.Control
                                as="textarea" rows="40"
                                placeholder="Markdown body..."
                                value={markdownBody}
                                onChange={e => setMarkDownBody(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="text-center" controlId="formBasicSubmit">
                            <Button onClick={handlePublish} variant="info">
                                Publish
                            </Button>
                        </Form.Group>

                    </Form>
                </div>
                <div className="col-lg-6">
                    <p className="mb-0">Preview</p>
                    <h1 className="mb-4">{markdownTitle}</h1>
                    <ReactMarkdown source={markdownBody} />
                </div>
            </div>

        </div>
    );
}

export default PostForm;