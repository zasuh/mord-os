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
import background from "../../wallpaper.png";

import Toolbar from "../Common/Toolbar";
import RssReaderModal from "../Modals/RssReaderModal";
import CameraModal from "../Modals/CameraModal";
import GalleryModal from "../Modals/GalleryModal";
import BrowserModal from "../Modals/BrowserModal";
import FileDirectoryModal from "../Modals/FileDirectoryModal";

const Home = () => {
  const [fileDirectoryModal, setFileDirectoryModal] = useState(false);
  const [rssReaderModal, setRssReaderModal] = useState(false);
  const [cameraModal, setCameraModal] = useState(false);
  const [galleryModal, setGalleryModal] = useState(false);
  const [browserModal, setBrowserModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = localStorage.getItem("Email");
    if (authToken) navigate("/");
    else navigate("/login");
  }, [navigate]);

  return (
    <>
      <Desktop>
        <IconsWrapper>
          <Icon onClick={() => setFileDirectoryModal(true)}>
            <FaFile size="3em" />
            <IconTitle>File Directory</IconTitle>
          </Icon>
          <Icon onClick={() => setRssReaderModal(true)}>
            <FaRssSquare size="3em" />
            <IconTitle>RSS Reader</IconTitle>
          </Icon>
          <Icon onClick={() => setCameraModal(true)}>
            <FaCamera size="3em" />
            <IconTitle>Camera</IconTitle>
          </Icon>
          <Icon onClick={() => setGalleryModal(true)}>
            <FaPhotoVideo size="3em" />
            <IconTitle>Gallery</IconTitle>
          </Icon>
          <Icon onClick={() => setBrowserModal(true)}>
            <FaChrome size="3em" />
            <IconTitle>Chrome</IconTitle>
          </Icon>
        </IconsWrapper>
      </Desktop>
      <Toolbar
        modals={{
          fileDirectoryModal,
          rssReaderModal,
          cameraModal,
          galleryModal,
          browserModal,
        }}
      />
      <FileDirectoryModal
        isOpen={fileDirectoryModal}
        onClose={() => setFileDirectoryModal(false)}
      />
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
  backgroundImage: `url(${background})`,
  backgroundRepeat: "no-repeat",
  maxWidth: "100%",
  height: "95vh",

  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
});

const IconsWrapper = styled.div({
  color: "white",
  height: "60%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  padding: 10,
  gap: "2em",
});

const Icon = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  cursor: "pointer",
});

const IconTitle = styled.div({
  marginTop: 5,
  textShadow: "black 1px 0 10px",
});

export default Home;
