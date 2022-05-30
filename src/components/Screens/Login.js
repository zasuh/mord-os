import React, { useState } from "react";
import styled from "@emotion/styled";

const Login = ({ login }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Wrapper>
      <InnerWrapper>
        <Title>MORD OS</Title>
        <LoginCard>
          <Input
            autocomplete="false"
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            autocomplete="false"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            onClick={() => login(email, password)}
            disabled={!email || !password}
          >
            Login
          </Button>
        </LoginCard>
      </InnerWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  maxWidth: "100%",
  height: "100vh",
});

const InnerWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: 20,
  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  borderRadius: 8,
});

const Title = styled.h1({
  fontFamily: "Roboto, sans-serif",
  fontWeight: "bold",
  fontSize: 24,
  marginBottom: 10,
});

const LoginCard = styled.div({
  width: 300,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 10,
});

const Input = styled.input({
  width: 200,
  padding: 10,
});

const Button = styled.button({
  fontFamily: "Roboto, sans-serif",
  color: "white",
  padding: 10,
  backgroundColor: "#347aeb",
  border: "none",
  borderRadius: 8,
  width: 100,
  cursor: "pointer",
  ":disabled": {
    backgroundColor: "grey",
    cursor: "not-allowed",
  },
});

export default Login;
