import React, { useContext, useState } from 'react';
import { PostContext } from '../../../providers/postContext';
import './postStyles.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ReactMarkdown from 'react-markdown';

const PostForm = (props) => {

    const { mobileCheckState } = useContext(PostContext);
    const isMobile = mobileCheckState;

    const [markdownTitle, setMarkdownTitle] = useState("");
    const [markdownBody, setMarkDownBody] = useState("");

    return (
        <div className={"container-fluid " + (isMobile ? "mt-8" : "mt-10")}>
            <div className="row">
                <div className="col-lg-6">
                    <Form className="text-left">
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
                            <Button variant="info" type="submit">
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