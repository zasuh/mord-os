import React, { useState } from "react";
import Modal from "react-modal";
import styled from "@emotion/styled";
import { FaChrome } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";

// Make sure to bind modal to your root (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

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
    if (e) e.preventDefault();
    window.open(`http://google.com/search?q=${searchQuery}`);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Gallery"
      style={MODAL_STYLES}
    >
      <Header>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 10,
          }}
        >
          <FaChrome size="1em" />
          <h1>Browser</h1>
        </div>
        <div>
          <AiOutlineCloseCircle
            size="1em"
            onClick={onClose}
            style={{ cursor: "pointer" }}
          />
        </div>
      </Header>
      <Content>
        <Title>SCHMOOGLE</Title>
        <form onSubmit={search}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Input
              placeholder="Search like Google"
              type="text"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <Button width={100} onClick={search} type="submit">
                Search
              </Button>
              <Button width={150} disabled>
                I'm feeling lucky
              </Button>
            </div>
          </div>
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

const Content = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "calc(100% - 64px)", // Height adjusted for top and bottom padding and header height
});

const Title = styled.div({
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

const Button = styled.button(({ width }) => ({
  fontFamily: "Roboto, sans-serif",
  color: "white",
  padding: 10,
  backgroundColor: "#347aeb",
  border: "none",
  borderRadius: 8,
  width,
  cursor: "pointer",
}));

export default BrowserModal;
