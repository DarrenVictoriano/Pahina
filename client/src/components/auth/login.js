import React, { useContext, useState } from 'react';
import './login.css';
import { PostContext } from '../../providers/postContext';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router-dom';

const Login = () => {

    const { mobileCheckState, userIDState } = useContext(PostContext);
    const isMobile = mobileCheckState;

    const [isError, setIsError] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [cookies, setCookie] = useCookies(['token', 'userID']);
    const [userID, setUserID] = userIDState;
    let history = useHistory();

    const handleLogin = (event) => {
        event.preventDefault();
        // check empty fields
        if (!username || !password) {
            setIsError(true);
        }

        // construct data before passing to API
        const data = {
            "username": username,
            "password": password
        }

        // first encyrpt payload
        axios.post("/api/v1/user/crypto", data)
            .then(encryptedData => {
                // return axios call with the encrpted payload
                return axios.post("/api/v1/user/auth", encryptedData.data)
            })
            .then(accountInfo => {
                // save token in cookie
                setCookie('token', accountInfo.data.token, { path: '/' });
                setUserID(accountInfo.data._id);
                history.push("/deets");
            })
            .catch(err => {
                setUsername("");
                setPassword("");
                setIsError(true);
            })
    };

    const handleNope = (event) => {
        event.preventDefault();
        history.push("/");
    }

    return (
        <div className={"container text-slate " + (isMobile ? "mt-8" : "mt-10")}>
            <div className="text-center">
                <h1>Are you Darren?</h1>
                <Form noValidate className="form-login mx-auto mt-5">
                    <Form.Group controlId="userGroup">
                        <Form.Control
                            type="text"
                            placeholder="username"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            isInvalid={isError} />
                    </Form.Group>

                    <Form.Group controlId="passGroup">
                        <Form.Control
                            type="password"
                            placeholder="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            isInvalid={isError} />
                        <Form.Control.Feedback type="invalid">
                            nice try.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="buttonGroup">
                        <Button onClick={handleLogin} variant="primary" className="mx-2 btn-sizer btn-sm">
                            Yes
                        </Button>
                        <Button onClick={handleNope} variant="primary" className="mx-2 btn-sizer btn-sm" >
                            Nope
                        </Button>
                    </Form.Group>

                </Form>
            </div>
        </div>
    );
}

export default Login;