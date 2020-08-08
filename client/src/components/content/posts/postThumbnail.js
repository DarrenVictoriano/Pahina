import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { PostContext } from '../../../providers/postContext';
import Moment from 'react-moment';
import Button from 'react-bootstrap/Button';
import { useCookies } from 'react-cookie';
import axios from 'axios';

const PostThumbnail = ({ id, title, overview, date }) => {

    const { mobileCheckState, allPostState } = useContext(PostContext);
    const isMobile = mobileCheckState;
    const [cookies] = useCookies(['token', 'userID']);
    const [allPost, setAllPost] = allPostState;

    let history = useHistory();

    const handleEdit = (event) => {
        event.preventDefault();
        history.push("/deets/" + id);
    }

    const handleDelete = (event) => {
        event.preventDefault();

        // create header
        let headerConfig = {
            "headers": {
                "x-header-token": cookies.token
            }
        }

        // delete post
        axios.delete("/api/v1/post/" + id, headerConfig)
            .then(msg => {
                // update allPost
                // get all post
                axios.get("/api/v1/post/")
                    .then(allPost => {
                        setAllPost(allPost.data)
                    })
                    .catch(err => {
                        console.log(err);
                    })
            })
            .catch(err => {
                console.log(err)
            });
    }

    // TODO: make the overview markdown friendly!

    return (
        <div className={"bg-navy-light rounded container " + (isMobile ? "p-3 mb-3" : "p-5 mb-5")}>
            <div className="row">
                <div className="col-lg-11">
                    <h1 className={"text-slate-lighter mb-0"}>{title}</h1>
                    <p className={"text-slate-light"}><Moment format="MMMM DD, YYYY" date={date} /></p>
                    <p className={"text-slate-light"}>{overview}</p> {/* MAKETH THOU MARKDOWN!! */}
                    <Link exact to={"/blog/" + id} className={"read-article text-slate-lighter "}>Read Article</Link>
                </div>
                {
                    cookies.token && <div className={"col-lg-1 " + (isMobile ? "mt-2" : "")}>
                        <Button onClick={handleEdit} className={"btn-sm btn-size " + (isMobile ? "mr-3" : "mb-3")}>
                            Edit
                        </Button>
                        <Button onClick={handleDelete} className="btn-danger btn-sm btn-size ">
                            Delete
                        </Button>
                    </div>
                }
            </div>
        </div>
    );
}

export default PostThumbnail;