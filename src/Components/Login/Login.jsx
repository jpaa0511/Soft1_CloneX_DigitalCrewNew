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
  RegisterButton,
  CloseButton,
  InputRegister,
  HeaderModal,
  TitleRegister,
  GoogleButton,
  FacebookButton,
} from "./LoginStyle";
import XIcon from "@mui/icons-material/X";
import { RegisterModal } from "../Modal/RegisterModal";
import { LoginModal } from "../Modal/ModalLogin";

const Login = () => {
  const {
    logInUser,
    signUpUser,
    logInWithGoogle,
    logInWithFacebook,
    errorMessage,
  } = useContext(UserContext);
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    email: "",
    password: "",
    displayName: "",
  });

  const { displayName, email, password } = formState;

  const onInputChangeLogin = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onLogin = async (event) => {
    event.preventDefault();
    const isValidLogin = await logInUser(email, password);
    if (isValidLogin) {
      navigate("/main", { replace: true });
    }
  };

  const onInputChangeRegister = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onRegister = async (event) => {
    event.preventDefault();
    const isValidLogin = await signUpUser(email, password, displayName);
    if (isValidLogin) {
      navigate("/main", { replace: true });
    }
  };

  const [isOpenModalRegister, setOpenModalRegister] = useState(false);

  const openModalRegister = () => {
    setOpenModalRegister(!isOpenModalRegister);
  };

  const [isOpenModalLogin, setOpenModalLogin] = useState(false);

  const openModalLogin = () => {
    setOpenModalLogin(!isOpenModalLogin);
  };

  const onLoginWithGoogle = async (event) => {
    event.preventDefault();

    const isValidLogin = await logInWithGoogle();
    if (isValidLogin) {
      navigate("/main", { replace: true });
    }
  };

  const onLoginWithFacebook = async (event) => {
    event.preventDefault();

    const isValidLogin = await logInWithFacebook();
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
          <Title>Lo que está pasando ahora</Title>
          <h3>Únete hoy</h3>
          <br />
          <GoogleButton onClick={onLoginWithGoogle}>
            <img src="https://img.icons8.com/?size=512&id=17949&format=png" />{" "}
            Ingresar con Google
          </GoogleButton>
          <br />
          <FacebookButton onClick={onLoginWithFacebook}>
            <img src="https://images.vexels.com/content/223136/preview/facebook-icon-social-media-8dfafe.png" />
            Ingresar con Facebook
          </FacebookButton>
          <br />
          <p>______________ o _________________</p>
          <br />
          <LoginButton onClick={openModalLogin}>Login</LoginButton>
          <br />
          <RegisterButton onClick={openModalRegister}>
            CREAR CUENTA
          </RegisterButton>
          {isOpenModalLogin && (
            <LoginModal>
              <HeaderModal>
                <TitleRegister>INICIAR SESION</TitleRegister>
                <CloseButton onClick={openModalLogin}>X</CloseButton>
              </HeaderModal>
              <form onSubmit={onLogin}>
                <Form>
                  <Input>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={onInputChangeLogin}
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
                      onChange={onInputChangeLogin}
                      placeholder="Enter your password"
                      required
                    />
                  </Input>
                  <LoginButton type="submit">Login</LoginButton>
                </Form>
                {errorMessage && (
                  <p style={{ color: "red", marginTop: "10px" }}>
                    {errorMessage}
                  </p>
                )}
              </form>
            </LoginModal>
          )}
        </MainContent>
        {isOpenModalRegister && (
          <RegisterModal>
            <HeaderModal>
              <TitleRegister>Crear cuenta</TitleRegister>
              <CloseButton onClick={openModalRegister}>X</CloseButton>
            </HeaderModal>
            <form onSubmit={onRegister}>
              <Form>
                <InputRegister>
                  <label htmlFor="displayName">Name</label>
                  <input
                    type="text"
                    name="displayName"
                    value={displayName}
                    onChange={onInputChangeRegister}
                    placeholder="Enter your Name"
                    required
                  />
                </InputRegister>
                <InputRegister>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={onInputChangeRegister}
                    placeholder="Enter your email"
                    required
                  />
                </InputRegister>
                <InputRegister>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={onInputChangeRegister}
                    placeholder="Enter your password"
                    required
                  />
                </InputRegister>
                <RegisterButton type="submit">CREAR CUENTA</RegisterButton>
              </Form>
            </form>
          </RegisterModal>
        )}
      </Container>
    </>
  );
};
export default Login;
