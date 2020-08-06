import React, { useState, createContext } from 'react';
import { useMediaQuery } from 'react-responsive';

export const PostContext = createContext();

export const PostProvider = (props) => {
    // this will return true if viewport is less than 500px
    const isMobile = useMediaQuery({ query: '(max-width: 991px)' });

    const [headerConfig, setHeaderConfig] = useState({
        "headers": {
            "x-header-token": localStorage.getItem("token")
        }
    });

    const [userID, setUserID] = useState("");

    // this will hold all my blog post
    const [accountInfo, setAccountInfo] = useState({
        "token": "",
        "_id": "",
        "username": "",
        "posts": [{
            "_id": "",
            "title": "",
            "overview": "",
            "body": "",
            "date_created": ""
        }]
    });

    return (
        <PostContext.Provider value={{
            "mobileCheckState": isMobile,
            "accountInfoState": [accountInfo, setAccountInfo],
            "headerConfigState": [headerConfig, setHeaderConfig],
            "userIDState": [userID, setUserID]
        }}>
            {props.children}
        </PostContext.Provider>
    );
}