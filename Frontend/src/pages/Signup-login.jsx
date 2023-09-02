import { Container, Form, Button, Alert } from "react-bootstrap";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignupLoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSignup = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/user/signup", {
        username,
        password,
      });

      // Handle successful signup response
      console.log("Signup:", response.data);
    } catch (error) {
      // Handle signup error
      setErrorMessage("Please write a valid username");
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/user/login", {
        username,
        password,
      });

      // Handle successful login response
      console.log("Login:", response.data);
      navigate("/homes");
    } catch (error) {
      // Handle login error
      console.log(error);
      setErrorMessage("Incorrect password or username");
    }
  };

  return (
    <Container
      className="signup-login-container p-4 m-auto"
      style={{ maxWidth: "40rem" }}
    >
      <div>
        <h1 className="text-center">Welcome to Home Sweet Home</h1>
      </div>
      <Form>
        {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
        <Form.Group controlId="formUsername" className="mt-3">
          {/* <Form.Label>Username</Form.Label> */}
          <Form.Control
            type="username"
            placeholder="Enter username"
            value={username}
            onChange={handleUsernameChange}
            className="p-3 w-80"
          />
        </Form.Group>
        <Form.Group controlId="formPassword" className="mt-3">
          {/* <Form.Label>Password</Form.Label> */}
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={handlePasswordChange}
            className="p-3 w-80"
          />
        </Form.Group>
        <div className="d-flex justify-content-evenly mt-3">
          <Button
            variant="primary"
            type="submit"
            onClick={handleSignup}
            className="btn-lg rounded-pill"
          >
            Sign up
          </Button>
          <Button
            variant="primary"
            type="submit"
            onClick={handleLogin}
            className="btn-lg rounded-pill"
          >
            Log in
          </Button>
        </div>
      </Form>
    </Container>
  );
}
