import { useState, useContext } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { LoginContext } from "../context/LoginContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // bunlar local state. daha geniş alanda kullanmak için app.js de yeniden yazdık. ordan usecontext(logincontext) ile props olarak (value) gönderdik ve burada usecontext ile aldık. logincontextle geldiği için paranteze onu aldık.

  // const [user, setUser] = useState({ email: "", password: "" });

  // şimdi statelerimiz global oldu.
  const { user, setUser } = useContext(LoginContext)
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <Container>
      <h1 className="text-center mt-4">LOGIN PAGE</h1>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            value={user?.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            name="password"
            value={user?.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </Form.Group>
        <Container className="text-center">
          <Button variant="danger" type="submit">
            Submit
          </Button>
        </Container>
      </Form>
    </Container>
  )
}

export default Login
