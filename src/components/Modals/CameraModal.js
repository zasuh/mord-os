import React from "react";
import Modal from "react-modal";
import Webcam from "react-webcam";
import styled from "@emotion/styled";
import { FaCamera } from "react-icons/fa";
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

const VIDEO_CONSTRAINTS = {
  width: 1280,
  height: 720,
  facingMode: "user",
};

const CameraModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Camera"
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
          <FaCamera size="1em" />
          <h1>Camera</h1>
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
        <Webcam
          style={{ width: 900, height: 600 }}
          audio={false}
          screenshotFormat="image/jpeg"
          videoConstraints={VIDEO_CONSTRAINTS}
        >
          {({ getScreenshot }) => (
            <ScreenshotButton
              onClick={() => {
                const imageSrc = getScreenshot();
                alert(`This is the source of the image: ${imageSrc}`);
                // Do something with image source
              }}
            >
              Capture photo
            </ScreenshotButton>
          )}
        </Webcam>
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

const ScreenshotButton = styled.button({
  fontFamily: "Roboto, sans-serif",
  color: "white",
  padding: 10,
  backgroundColor: "#347aeb",
  border: "none",
  borderRadius: 8,
});

export default CameraModal;
