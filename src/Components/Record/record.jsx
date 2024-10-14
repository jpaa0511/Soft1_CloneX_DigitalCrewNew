import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "../../auth/Contexts/UserContext";
import {
  GlobalStyle,
  Container,
  SidebarLeft,
  MainContent,
  Title,
  LoginButton,
  Input,
  Form,
} from "../Login/LoginStyle";
import XIcon from "@mui/icons-material/X";

const Register = () => {
  const { registerUser, errorMessage } = useContext(UserContext);
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formState;

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onRegister = async (event) => {
    event.preventDefault();
    const isValidRegister = registerUser(name, email, password);
    if (isValidRegister) {
      navigate("/main", { replace: true });
    }
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <SidebarLeft>
          <XIcon style={{ fontSize: "400px", color: "#e7e9ea" }} />
        </SidebarLeft>
        <MainContent>
          <Title>Create your account</Title>
          <form onSubmit={onRegister}>
            <Form>
              <Input>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={onInputChange}
                  placeholder="Enter your name"
                  required
                />
              </Input>
              <Input>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={onInputChange}
                  placeholder="Enter your email"
                  required
                />
              </Input>
              <Input>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={onInputChange}
                  placeholder="Enter your password"
                  required
                />
              </Input>
              <LoginButton type="submit">Register</LoginButton>
            </Form>
            {errorMessage && (
              <p style={{ color: "red", marginTop: "10px" }}>{errorMessage}</p>
            )}
          </form>
          <p style={{ marginTop: "20px" }}>
            Already have an account? <Link to="/login">Sign in</Link>
          </p>
        </MainContent>
      </Container>
    </>
  );
};

export default Register;
