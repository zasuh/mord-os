import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import styled from "@emotion/styled";
import axios from "axios";
import { FaRssSquare, FaRegCircle } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";

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

const MOCKED_POSTS = [
  {
    id: 112443,
    name: "Mocked post 1",
    email: "email@email.com",
    body: "Lorem ipsum",
  },
  {
    id: 2123143,
    name: "Mocked post 2",
    email: "email2@email.com",
    body: "Lorem ipsum",
  },
  {
    id: 37457657,
    name: "Mocked post 3",
    email: "email3@email.com",
    body: "Lorem ipsum",
  },
  {
    id: 41232145,
    name: "Mocked post 4",
    email: "email4@email.com",
    body: "Lorem ipsum",
  },
  {
    id: 58768768,
    name: "Mocked post 5",
    email: "email5@email.com",
    body: "Lorem ipsum",
  },
];

const RssReaderModal = ({ isOpen, onClose }) => {
  const [posts, setPosts] = useState([]);
  const [selected, setSelected] = useState("allPosts");

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/comments"
        );
        setPosts(data.slice(0, 50));
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
          <Sources>
            <SidebarItem onClick={() => setSelected("allPosts")}>
              <div>
                <FaRegCircle size="1em" />
              </div>
              <SidebarItemTitle selected={selected === "allPosts"}>
                All Posts
              </SidebarItemTitle>
            </SidebarItem>
            <SidebarItem onClick={() => setSelected("jsonPlaceholder")}>
              <div>
                <FaRegCircle size="1em" />
              </div>
              <SidebarItemTitle selected={selected === "jsonPlaceholder"}>
                JSON Placeholder Posts
              </SidebarItemTitle>
            </SidebarItem>
            <SidebarItem onClick={() => setSelected("mocked")}>
              <div>
                <FaRegCircle size="1em" />
              </div>
              <SidebarItemTitle selected={selected === "mocked"}>
                Mocked Posts
              </SidebarItemTitle>
            </SidebarItem>
          </Sources>
        </Sidebar>
        <Posts>
          {(() => {
            let initialPosts = [];

            if (selected === "allPosts")
              initialPosts = [...MOCKED_POSTS, ...posts];
            if (selected === "mocked") initialPosts = [...MOCKED_POSTS];
            if (selected === "jsonPlaceholder") initialPosts = posts;

            return (
              <>
                {initialPosts.map((post) => (
                  <Post key={post.id}>
                    <h3 style={{ fontWeight: "bold" }}>{post.name}</h3>
                    <p>Written by: {post.email}</p>
                    <p>{post.body}</p>
                  </Post>
                ))}
                <EmptyState>
                  {initialPosts.length === 0 && (
                    <div style={{ fontFamily: "Roboto, sans-serif" }}>
                      Nothing to show
                    </div>
                  )}
                </EmptyState>
              </>
            );
          })()}
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
  alignItems: "flex-start",
  height: "calc(100% - 64px)",
});

const Sidebar = styled.div({
  position: "sticky",
  top: 0,
  height: "100%",
  width: "25%",
  padding: 10,
  borderRight: "1px solid rgba(0, 0, 0, 0.13)",
});

const Sources = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: 10,
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

const Posts = styled.div({
  height: "100%",
  flex: "0 1 calc(75% + 20px)",
  marginLeft: 15,
  overflow: "auto",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const Post = styled.div({
  width: "calc(100% - 40px)",
  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  margin: "0 10px 10px 10px",
  borderRadius: 8,
  padding: 10,

  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: 10,
});

const EmptyState = styled.div({
  height: 600,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export default RssReaderModal;
