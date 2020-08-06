import React, { useContext, useState } from 'react';
import './login.css';
import { PostContext } from '../../providers/postContext';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Login = () => {

    const { mobileCheckState } = useContext(PostContext);
    const isMobile = mobileCheckState;

    const [isError, setIsError] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (event) => {

        if (!username || !password) {
            setIsError(true);
        }

    };


    // localStorage.setItem('token', token);

    return (
        <div className={"container text-slate " + (isMobile ? "mt-8" : "mt-10")}>
            <div className="text-center">
                <h1>Are you Darren?</h1>
                <Form noValidate className="form-group mx-auto mt-5">
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
                        <Button variant="primary" className="mx-2 btn-sizer btn-sm" >
                            No
                        </Button>
                    </Form.Group>

                </Form>
            </div>
        </div>
    );
}

export default Login;