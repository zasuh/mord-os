/* eslint-disable default-case */
import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import {
  FaFile,
  FaRssSquare,
  FaCamera,
  FaPhotoVideo,
  FaChrome,
  FaWifi,
  FaUsb,
  FaBell,
} from "react-icons/fa";
import { ImWindows, ImSearch } from "react-icons/im";

const MODAL_NAMES_MAP = {
  fileDirectoryModal: "File Directory",
  rssReaderModal: "RSS Reader",
  cameraModal: "Camera",
  galleryModal: "Gallery",
  browserModal: "Browser",
};

const Toolbar = ({ modals }) => {
  const [date, setDate] = useState(new Date());
  const [openedModal, setOpenedModal] = useState(null);

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return () => clearInterval(timerId);
  }, []);

  useEffect(() => {
    for (const [key, value] of Object.entries(modals)) {
      if (value) setOpenedModal(MODAL_NAMES_MAP[key]);
    }
    if (Object.values(modals).every((value) => !value)) setOpenedModal(null);
  }, [modals]);

  const refreshClock = () => {
    setDate(new Date());
  };

  return (
    <Wrapper>
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <ImWindows size="1.5em" />
        <ImSearch size="1.5em" />
        {openedModal && (
          <Opened>
            {(() => {
              switch (openedModal) {
                case "File Directory":
                  return <FaFile size="1em" />;
                case "RSS Reader":
                  return <FaRssSquare size="1em" />;
                case "Camera":
                  return <FaCamera size="1em" />;
                case "Gallery":
                  return <FaPhotoVideo size="1em" />;
                case "Browser":
                  return <FaChrome size="1em" />;
              }
            })()}
            {openedModal}
          </Opened>
        )}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div>
          <FaBell size="1em" />
        </div>
        <div>
          <FaUsb size="1em" />
        </div>
        <div>
          <FaWifi size="1em" />
        </div>
        <div style={{ fontFamily: "Roboto, sans-serif" }}>
          {date.toLocaleTimeString()}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div({
  fontFamily: "Roboto, sans-serif",
  backgroundColor: "#b2c2db",
  maxWidth: "100%",
  height: "5vh",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 20px",
});

const Opened = styled.div({
  width: 150,
  border: "1px solid black",
  borderRadius: 8,
  padding: 10,

  display: "flex",
  alignItems: "center",
  gap: 10,
});

export default Toolbar;
