import React from "react";
import styled from "@emotion/styled";

const Button = ({ text, backgroundColor, width, children, onClick }) => {
  return (
    <Wrapper
      children={children}
      onClick={onClick}
      backgroundColor={backgroundColor}
      width={width}
    >
      {children}
      {text}
    </Wrapper>
  );
};

Button.defaultProps = {
  text: "",
  backgroundColor: "#37423D",
  width: 100,
  children: null,
};

const Wrapper = styled.button(({ backgroundColor, width, children }) => ({
  ...(children[0] && {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 5,
  }),
  fontFamily: "Roboto, sans-serif",
  color: "white",
  padding: 10,
  backgroundColor,
  border: "none",
  borderRadius: 8,
  width,
  cursor: "pointer",
  ":disabled": {
    backgroundColor: "grey",
    cursor: "not-allowed",
  },
}));

export default Button;
