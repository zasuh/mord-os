import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import {
  FaFile,
  FaRssSquare,
  FaCamera,
  FaPhotoVideo,
  FaChrome,
} from "react-icons/fa";

import Toolbar from "../Toolbar";
import RssReaderModal from "../Modals/RssReaderModal";
import CameraModal from "../Modals/CameraModal";
import GalleryModal from "../Modals/GalleryModal";
import BrowserModal from "../Modals/BrowserModal";

const Home = () => {
  const [fileDirectoryModal, setFileDirectoryModal] = useState(false);
  const [rssReaderModal, setRssReaderModal] = useState(false);
  const [cameraModal, setCameraModal] = useState(false);
  const [galleryModal, setGalleryModal] = useState(false);
  const [browserModal, setBrowserModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = sessionStorage.getItem("Email");
    if (authToken) navigate("/");
    else navigate("/login");
  }, [navigate]);

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
          <Icon onClick={() => setGalleryModal(true)}>
            <FaPhotoVideo size="3em" />
            <p style={{ marginTop: 5 }}>Gallery</p>
          </Icon>
          <Icon onClick={() => setBrowserModal(true)}>
            <FaChrome size="3em" />
            <p style={{ marginTop: 5 }}>Chrome</p>
          </Icon>
        </IconsWrapper>
      </Desktop>
      <Toolbar />
      <RssReaderModal
        isOpen={rssReaderModal}
        onClose={() => setRssReaderModal(false)}
      />
      <CameraModal isOpen={cameraModal} onClose={() => setCameraModal(false)} />
      <GalleryModal
        isOpen={galleryModal}
        onClose={() => setGalleryModal(false)}
      />
      <BrowserModal
        isOpen={browserModal}
        onClose={() => setBrowserModal(false)}
      />
    </>
  );
};

const Desktop = styled.div({
  fontFamily: "Roboto, sans-serif",
  backgroundColor: "#347aeb",
  maxWidth: "100%",
  height: "95vh",

  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
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

export default Home;
