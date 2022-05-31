import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { ImWindows, ImSearch } from "react-icons/im";

const Toolbar = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return () => clearInterval(timerId);
  }, []);

  const refreshClock = () => {
    setDate(new Date());
  };

  return (
    <Wrapper>
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <ImWindows size="1.5em" />
        <ImSearch size="1.5em" />
      </div>
      <div style={{ fontFamily: "Roboto, sans-serif" }}>
        {date.toLocaleTimeString()}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div({
  backgroundColor: "#b2c2db",
  maxWidth: "100%",
  height: "5vh",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 20px",
});

export default Toolbar;
