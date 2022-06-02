import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import styled from "@emotion/styled";
import axios from "axios";
import { FaPhotoVideo, FaRegCircle } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { resetState } from "react-modal/lib/helpers/ariaAppHider";

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

const GalleryModal = ({ isOpen, onClose }) => {
  const [photos, setPhotos] = useState([]);
  const [selected, setSelected] = useState("allImages");

  useEffect(() => {
    if (isOpen) {
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
    }
  }, [isOpen]);

  return (
    <Modal
      ariaHideApp={false}
      isOpen={isOpen}
      onRequestClose={() => {
        onClose();
        resetState();
      }}
      contentLabel="Gallery"
      style={MODAL_STYLES}
    >
      <Header>
        <Title>
          <FaPhotoVideo size="1em" />
          <h1>Gallery</h1>
        </Title>
        <div>
          <AiOutlineCloseCircle
            size="1em"
            onClick={() => {
              onClose();
              resetState();
            }}
            style={{ cursor: "pointer" }}
          />
        </div>
      </Header>
      <Content>
        <Sidebar>
          <Sources>
            <SidebarItem onClick={() => setSelected("allImages")}>
              <div>
                <FaRegCircle size="1em" />
              </div>
              <SidebarItemTitle selected={selected === "allImages"}>
                All Images
              </SidebarItemTitle>
            </SidebarItem>
            <SidebarItem onClick={() => setSelected("jsonPlaceholder")}>
              <div>
                <FaRegCircle size="1em" />
              </div>
              <SidebarItemTitle selected={selected === "jsonPlaceholder"}>
                JSON Placeholder Images
              </SidebarItemTitle>
            </SidebarItem>
            <SidebarItem onClick={() => setSelected("webcam")}>
              <div>
                <FaRegCircle size="1em" />
              </div>
              <SidebarItemTitle selected={selected === "webcam"}>
                Webcam Images
              </SidebarItemTitle>
            </SidebarItem>
          </Sources>
        </Sidebar>
        <Images>
          {(() => {
            let initialPhotos = [];
            const webcamImages = localStorage.getItem("Camera Images");

            if (selected === "allImages")
              initialPhotos = [
                ...(webcamImages ? JSON.parse(webcamImages) : []),
                ...photos,
              ];
            if (selected === "webcam" && webcamImages)
              initialPhotos = [...JSON.parse(webcamImages)];
            if (selected === "jsonPlaceholder") initialPhotos = photos;

            return (
              <>
                {initialPhotos.length > 0 ? (
                  initialPhotos.map((photo) => (
                    <div key={photo.id} style={{ width: 150 }}>
                      <ImageWrapper>
                        <Image src={photo.thumbnailUrl} alt="" />
                      </ImageWrapper>
                      <ImageTitle>{photo.title}</ImageTitle>
                    </div>
                  ))
                ) : (
                  <EmptyState>
                    <p>
                      Nothing to show. Take a picture through the Camera App!
                    </p>
                  </EmptyState>
                )}
              </>
            );
          })()}
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

const Title = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 10,
});

const Content = styled.div({
  display: "flex",
  alignItems: "flex-start",
  height: "calc(100% - 64px)",
});

const Sidebar = styled.div({
  position: "sticky",
  top: 0,
  height: "100%",
  width: "33%",
  borderRight: "1px solid rgba(0, 0, 0, 0.13)",
  padding: 10,
});

const SidebarItem = styled.div({
  display: "flex",
  alignItems: "center",
  gap: 5,
  cursor: "pointer",
});

const SidebarItemTitle = styled.p(({ selected }) => ({
  fontFamily: "Roboto, sans-serif",
  fontSize: 14,
  fontWeight: selected ? "bold" : "initial",
}));

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
  alignItems: "flex-start",
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
  objectFit: "contain",
});

const EmptyState = styled.div({
  height: 600,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export default GalleryModal;
