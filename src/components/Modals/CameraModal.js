import React, { useRef, useCallback } from "react";
import Modal from "react-modal";
import Webcam from "react-webcam";
import styled from "@emotion/styled";
import { FaCamera } from "react-icons/fa";
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

const VIDEO_CONSTRAINTS = {
  width: 1280,
  height: 720,
  facingMode: "user",
};

const CameraModal = ({ isOpen, onClose }) => {
  const webcamRef = useRef(null);
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    const currentImages = localStorage.getItem("Camera Images");
    const id = Math.floor(1000 + Math.random() * 9000);

    if (!currentImages) {
      localStorage.setItem(
        "Camera Images",
        JSON.stringify([
          { id, title: `Camera Screenshot ${id}`, thumbnailUrl: imageSrc },
        ])
      );
    } else {
      localStorage.setItem(
        "Camera Images",
        JSON.stringify([
          ...JSON.parse(currentImages),
          { id, title: `Camera Screenshot ${id}`, thumbnailUrl: imageSrc },
        ])
      );
    }
    alert("Picture taken");
  }, [webcamRef]);

  return (
    <Modal
      ariaHideApp={false}
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Camera"
      style={MODAL_STYLES}
    >
      <Header>
        <Title>
          <FaCamera size="1em" />
          <h1>Camera</h1>
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
        <Webcam
          ref={webcamRef}
          style={{ width: "100%", height: "100%", margin: 10 }}
          audio={false}
          screenshotFormat="image/jpeg"
          videoConstraints={VIDEO_CONSTRAINTS}
        />
        <Button text="Take Photo" onClick={capture} />
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

export default CameraModal;
