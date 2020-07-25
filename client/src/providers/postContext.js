import React, { useState, createContext } from 'react';
import { useMediaQuery } from 'react-responsive';

export const PostContext = createContext();

export const PostProvider = (props) => {
    // this will return true if viewport is less than 500px
    const isMobile = useMediaQuery({ query: '(max-width: 991px)' });

    // this will hold all my blog post
    const [postData, setPostData] = useState({
        "title": null,
        "date": null,
        "body": null
    });

    return (
        <PostContext.Provider value={{
            "mobileCheckState": isMobile,
            "postDataState": [postData, setPostData]
        }}>
            {props.children}
        </PostContext.Provider>
    );
}