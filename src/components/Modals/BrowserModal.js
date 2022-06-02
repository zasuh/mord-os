import React, { useState } from "react";
import Modal from "react-modal";
import styled from "@emotion/styled";
import { FaChrome } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";

import Button from "../Common/Button";

// Make sure to bind modal to your root (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement(document.getElementById("root"));

const MODAL_STYLES = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    height: "70%",
    fontFamily: "Roboto, sans-serif",
  },
};

const BrowserModal = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState(null);

  const search = (e) => {
    if (!searchQuery) return;
    e.preventDefault();
    window.open(`http://google.com/search?q=${searchQuery}`);
  };

  return (
    <Modal
      ariaHideApp={false}
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Gallery"
      style={MODAL_STYLES}
    >
      <Header>
        <Title>
          <FaChrome size="1em" />
          <h1>Browser</h1>
        </Title>
        <div>
          <AiOutlineCloseCircle
            size="1em"
            onClick={onClose}
            style={{ cursor: "pointer" }}
          />
        </div>
      </Header>
      <Content>
        <BrowserTitle>SCHMOOGLE</BrowserTitle>
        <form onSubmit={search}>
          <FormContent>
            <Input
              placeholder="Search like Google"
              type="text"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <Button
                text="Search"
                width={100}
                onClick={search}
                type="submit"
              />
              <Button
                text="I'm feeling lucky"
                width={150}
                disabled
                backgroundColor="#3A2618"
              />
            </div>
          </FormContent>
        </form>
      </Content>
    </Modal>
  );
};

const Header = styled.div({
  width: "100%",
  fontSize: 24,
  fontWeight: "bold",
  marginBottom: 20,

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 10,
});

const Title = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 10,
});

const Content = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "calc(100% - 64px)",
});

const FormContent = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 10,
});

const BrowserTitle = styled.div({
  fontFamily: "Roboto, sans-serif",
  fontSize: 48,
  fontWeight: "bold",
  marginBottom: 16,
});

const Input = styled.input({
  width: 500,
  borderRadius: 12,
  padding: 5,
});

export default BrowserModal;
