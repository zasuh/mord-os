import React, { useState } from "react";
import styled from "@emotion/styled";
import {
  FaFile,
  FaRssSquare,
  FaCamera,
  FaPhotoVideo,
  FaChrome,
} from "react-icons/fa";

import RssReaderModal from "./components/RssReaderModal";
import CameraModal from "./components/CameraModal";

const App = () => {
  const [fileDirectoryModal, setFileDirectoryModal] = useState(false);
  const [rssReaderModal, setRssReaderModal] = useState(false);
  const [cameraModal, setCameraModal] = useState(false);
  const [galleryModal, setGalleryModal] = useState(false);
  const [browserModal, setBrowserModal] = useState(false);
  return (
    <>
      <Desktop>
        <IconsWrapper>
          <Icon>
            <FaFile size="3em" />
            <p style={{ marginTop: 5 }}>File Directory</p>
          </Icon>
          <Icon onClick={() => setRssReaderModal(true)}>
            <FaRssSquare size="3em" />
            <p style={{ marginTop: 5 }}>RSS Reader</p>
          </Icon>
          <Icon onClick={() => setCameraModal(true)}>
            <FaCamera size="3em" />
            <p style={{ marginTop: 5 }}>Camera</p>
          </Icon>
          <Icon>
            <FaPhotoVideo size="3em" />
            <p style={{ marginTop: 5 }}>Gallery</p>
          </Icon>
          <Icon>
            <FaChrome size="3em" />
            <p style={{ marginTop: 5 }}>Chrome</p>
          </Icon>
        </IconsWrapper>
      </Desktop>
      <Toolbar>
        <Start>Start</Start>
      </Toolbar>
      <RssReaderModal
        isOpen={rssReaderModal}
        onClose={() => setRssReaderModal(false)}
      />
      <CameraModal isOpen={cameraModal} onClose={() => setCameraModal(false)} />
    </>
  );
};

const Desktop = styled.div({
  backgroundColor: "#347aeb",
  maxWidth: "100%",
  height: "95vh",

  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
});

const Toolbar = styled.div({
  backgroundColor: "#b2c2db",
  maxWidth: "100%",
  height: "5vh",

  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  paddingLeft: 20,
});

const Start = styled.div({
  color: "white",
  fontSize: 24,
  textAlign: "center",
  width: 100,
  backgroundColor: "#347aeb",
});

const IconsWrapper = styled.div({
  height: "60%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  padding: 10,
});

const Icon = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  cursor: "pointer",
});

export default App;
