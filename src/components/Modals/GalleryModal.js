import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import styled from "@emotion/styled";
import axios from "axios";
import { FaPhotoVideo, FaRegCircle } from "react-icons/fa";
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

const GalleryModal = ({ isOpen, onClose }) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/photos"
        );
        setPhotos(data.slice(0, 50));
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

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
          <FaPhotoVideo size="1em" />
          <h1>Gallery</h1>
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
        <Sidebar>
          <Sources>
            <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <div>
                <FaRegCircle size="1em" />
              </div>
              <p style={{ fontSize: 14 }}>All Images</p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <div>
                <FaRegCircle size="1em" />
              </div>
              <p style={{ fontSize: 14 }}>JSON Placeholder Images</p>
            </div>
          </Sources>
        </Sidebar>
        <Images>
          {photos.map((photo) => (
            <div key={photo.id} style={{ width: 150 }}>
              <ImageWrapper>
                <Image src={photo.thumbnailUrl} alt="" />
              </ImageWrapper>
              <ImageTitle>{photo.title}</ImageTitle>
            </div>
          ))}
        </Images>
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
  alignItems: "center",
  height: "calc(100% - 64px)", // Height adjusted for top and bottom padding and header height
});

const Sidebar = styled.div({
  position: "sticky",
  top: 0,
  height: "100%",
  width: "33%",
  borderRight: "1px solid rgba(0, 0, 0, 0.13)",
  padding: 10,
});

const Sources = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: 10,
});

const Images = styled.div({
  maxHeight: "100%",
  flex: "0 1 calc(66% + 20px)",
  flexWrap: "wrap",
  margin: "0 15px",
  overflow: "auto",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 20,
});

const ImageWrapper = styled.div({
  width: 150,
  height: 150,
  overflow: "hidden",
  borderRadius: 8,
  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
});

const ImageTitle = styled.div({
  fontFamily: "Roboto, sans-serif",
  fontWeight: "bold",
  marginTop: 10,
  width: 150,
  height: 20,
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
});

const Image = styled.img({
  flexBasis: "40%",
  flexGrow: 1,
  width: 150,
  height: 150,
});

export default GalleryModal;
