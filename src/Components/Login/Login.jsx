import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
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
} from "./LoginStyle";
import XIcon from "@mui/icons-material/X";

const Login = () => {
  const { loginUser, errorMessage } = useContext(UserContext);
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formState;

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onLogin = async (event) => {
    event.preventDefault();
    const isValidLogin = loginUser(email, password);
    if (isValidLogin) {
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
          <Title>Sign in to X</Title>
          <form onSubmit={onLogin}>
            <Form>
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
              <LoginButton type="submit">Login</LoginButton>
            </Form>
            {errorMessage && (
              <p style={{ color: "red", marginTop: "10px" }}>{errorMessage}</p>
            )}
          </form>
        </MainContent>
      </Container>
    </>
  );
};
export default Login;
