import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import styled from "@emotion/styled";
import axios from "axios";
import { FaRssSquare, FaRegCircle } from "react-icons/fa";
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

const RssReaderModal = ({ isOpen, onClose }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await axios.get(
          "https://jsonplaceholder.typicode.com/comments"
        );
        setPosts(result.data.slice(0, 50));
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="RSS Reader"
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
          <FaRssSquare size="1em" />
          <h1>RSS Reader</h1>
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
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <FaRegCircle size="1em" />
            <p style={{ fontSize: 14 }}>JSON Placeholder Comments</p>
          </div>
        </Sidebar>
        <Posts>
          {posts.map((post) => (
            <Post key={post.id}>
              <h3 style={{ fontWeight: "bold" }}>{post.name}</h3>
              <p>Written by: {post.email}</p>
              <p>{post.body}</p>
            </Post>
          ))}
        </Posts>
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

const Posts = styled.div({
  maxHeight: "100%",
  flex: "0 1 calc(66% + 20px)",
  margin: "0 10px",
  overflow: "auto",
});

const Post = styled.div({
  maxWidth: 600,
  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  marginBottom: 10,
  marginLeft: 10,
  borderRadius: 8,
  padding: 10,

  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: 10,
});

export default RssReaderModal;
