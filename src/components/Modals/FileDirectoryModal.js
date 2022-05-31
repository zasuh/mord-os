import React, { useState } from "react";
import Modal from "react-modal";
import styled from "@emotion/styled";
import { FaFile, FaPlus } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";

import Table from "../Table";

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

const STARTING_DATA = [
  {
    id: 1,
    title: "First title",
    body: "Some text that will probably be in a body.",
    date: new Date(),
  },
  {
    id: 2,
    title: "Second title",
    body: "Some text that will probably be in a body.",
    date: new Date(),
  },
  {
    id: 3,
    title: "Third title",
    body: "Some text that will probably be in a body.",
    date: new Date(),
  },
  {
    id: 4,
    title: "Fourth title",
    body: "Some text that will probably be in a body.",
    date: new Date(),
  },
  {
    id: 5,
    title: "Fifth title",
    body: "Some text that will probably be in a body.",
    date: new Date(),
  },
];

const FileDirectoryModal = ({ isOpen, onClose }) => {
  const [files, setFiles] = useState(STARTING_DATA);
  const [title, setTitle] = useState(null);
  const [body, setBody] = useState(null);
  const [editor, setEditor] = useState(false);

  const save = () => {
    const id = Math.floor(1000 + Math.random() * 9000);
    const newFile = {
      id,
      title,
      body,
      date: new Date(),
    };
    setFiles([newFile, ...files]);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => {
        setEditor(false);
        onClose();
      }}
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
          <FaFile size="1em" />
          <h1>File Directory</h1>
        </div>
        <div>
          <AiOutlineCloseCircle
            size="1em"
            onClick={() => {
              setEditor(false);
              onClose();
            }}
            style={{ cursor: "pointer" }}
          />
        </div>
      </Header>
      <Content>
        {editor && (
          <Sidebar>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                width: "calc(100% - 15px)",
              }}
            >
              <AiOutlineCloseCircle
                size="1em"
                onClick={() => setEditor(false)}
                style={{ cursor: "pointer" }}
              />
            </div>
            <form autoComplete="off">
              <div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <p style={{ marginBottom: 5 }}>Title</p>
                  <Input
                    autocomplete="false"
                    type="text"
                    placeholder="File title"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <p style={{ marginBottom: 5 }}>Body</p>
                  <Textarea
                    onChange={(e) => setBody(e.target.value)}
                    placeholder="Write something in me!"
                    rows="10"
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  width: "calc(100% - 15px)",
                }}
              >
                <Save type="submit" onClick={save} disabled={!title || !body}>
                  Save
                </Save>
              </div>
            </form>
          </Sidebar>
        )}
        <Files editor={editor}>
          <AddFileWrapper>
            <AddFile onClick={() => setEditor(true)}>
              <FaPlus size="1em" />
              Add new text file
            </AddFile>
          </AddFileWrapper>
          <Table startingData={files} />
        </Files>
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

const Files = styled.div(({ editor }) => ({
  maxHeight: "100%",
  flex: `0 1 ${editor ? "calc(66% + 20px)" : "100%"}`,
  margin: "0 15px",
  overflow: "auto",
}));

const Input = styled.input({
  width: "calc(100% - 35px)",
  padding: 10,
  marginBottom: 20,
  borderRadius: 8,
});

const Textarea = styled.textarea({
  width: "calc(100% - 35px)",
  padding: 10,
  resize: "vertical",
  borderRadius: 8,
  marginBottom: 20,
});

const Save = styled.button({
  fontFamily: "Roboto, sans-serif",
  color: "white",
  padding: 10,
  backgroundColor: "#347aeb",
  border: "none",
  borderRadius: 8,
  width: 100,
  cursor: "pointer",
  ":disabled": {
    backgroundColor: "grey",
    cursor: "not-allowed",
  },
});

const AddFileWrapper = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  width: "100%",
  marginBottom: 20,
});

const AddFile = styled.button({
  fontFamily: "Roboto, sans-serif",
  color: "white",
  padding: 10,
  backgroundColor: "#347aeb",
  border: "none",
  borderRadius: 8,

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: 140,
  cursor: "pointer",
});

export default FileDirectoryModal;
