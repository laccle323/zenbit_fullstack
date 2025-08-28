import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from "../services/authServices";
import './login.scss';

const LoginPage = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

    const validate = (ch_email: boolean, ch_pass: boolean) => {
        const newErrors: { email?: string; password?: string } = {};

        if (ch_email) {
            if (!email) {
                newErrors.email = 'Email is required.';
            } else if (!/\S+@\S+\.\S+/.test(email)) {
                // newErrors.email = 'Invalid email address.';
            }
        }

        if (ch_pass) {
            if (!password) {
                newErrors.password = 'Password is required.';
            } else if (password.length < 6) {
                newErrors.password = 'Password must be at least 6 characters.';
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const onSignIn = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (!validate(true, true)) return;

        try {
            const data = await loginUser({ email, password });
            localStorage.setItem('token', JSON.stringify(data.data.tokens));
            localStorage.setItem('me', JSON.stringify(data.data.me));
            navigate('/');
        } catch (err) {
            console.log('Login failed. Please check your credentials.');
        }
    };

    return (
        <Container fluid className="login-page">
            <Row className="min-vh-100">
                {/* Left Image Side */}
                <Col md={7} className="login-image d-none d-md-block" />

                {/* Right Form Side */}
                <Col md={5} className="d-flex align-items-center justify-content-center">
                    <div className="login-form-container">
                        <h2 className="mb-4">Login</h2>
                        <Form>
                            <Form.Group controlId="formEmail" className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => { setEmail(e.target.value); validate(true, false); }}
                                    isInvalid={!!errors.email}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.email}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group controlId="formPassword" className="mb-2">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => { setPassword(e.target.value); validate(false, true); }}
                                    isInvalid={!!errors.password}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.password}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <div className="d-flex justify-content-end mb-4">
                                <Link to="/forgot-password" className="text-primary small">
                                    Forgot password?
                                </Link>
                            </div>

                            <Button
                                variant="primary"
                                className="w-100 my-3 text-white"
                                onClick={onSignIn}
                            >
                                Sign In
                            </Button>

                            <div className="text-center">
                                <span className="text-muted">Don't have account? </span>
                                <Link to="/signup" className="signup-link">
                                    Sign Up
                                </Link>
                            </div>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default LoginPage;
