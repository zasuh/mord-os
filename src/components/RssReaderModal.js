import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import styled from "@emotion/styled";
import axios from "axios";
import { FaRssSquare, FaRegCircle } from "react-icons/fa";

// Make sure to bind modal to your root (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    height: 500,
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
        console.log(result.data);
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
      style={modalStyles}
    >
      <Title>
        <FaRssSquare size="1em" />
        <h1>RSS Reader</h1>
      </Title>
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

const Title = styled.h1({
  fontSize: 24,
  fontWeight: "bold",
  marginBottom: 20,

  display: "flex",
  alignItems: "center",
  gap: 10,
});

const Content = styled.div({
  display: "flex",
  alignItems: "center",
  height: "calc(500px - 40px)", // Modal height minus padding on top and bottom
});

const Sidebar = styled.div({
  height: "100%",
  width: "33%",
  borderRight: "1px solid rgba(0, 0, 0, 0.13)",
  padding: 10,
});

const Posts = styled.div({
  maxHeight: "100%",
  width: "66%",
  margin: "0 10px",
});

const Post = styled.div({
  width: "100%",
  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  marginBottom: 10,
  borderRadius: 8,
  padding: 10,

  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: 10,
});

export default RssReaderModal;
