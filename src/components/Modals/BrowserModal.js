import React, { useState, useEffect } from "react";
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
      <Content></Content>
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
  alignItems: "center",
  height: "calc(100% - 64px)", // Height adjusted for top and bottom padding and header height
});

export default BrowserModal;
