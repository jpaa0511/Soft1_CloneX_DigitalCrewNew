import React, { useState, useEffect } from "react";
import { Container, Header } from "./styles";
import { BoxTwitter } from "./BoxTwitter";
import { Posts } from "./Post";
import { db } from "../../Connecting_to_Firebase/firebase";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";

export const Home = () => {
  const [posts, setPosts] = useState([]);

  const getPost = () => {
    const postsRef = collection(db, "posts");
    const q = query(postsRef, orderBy("timestamp", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const docs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(docs);
      console.log(docs);
    });

    return unsubscribe;
  };

  useEffect(() => {
    const unsubscribe = getPost();
    return () => unsubscribe(); // Desuscribir cuando se desmonte el componente
  }, []);

  return (
    <Container>
      {/* Headers */}
      <Header>Home</Header>
      {/* TweetBox */}
      <BoxTwitter />
      {/* Posts */}
      {posts.map((post) => (
        <Posts
          key={post.id}
          name={post.name}
          username={post.username}
          veridield={post.veridield}
          text={post.text}
          avatar={post.avatar}
          imagenPost={post.imagePost}
        />
      ))}
    </Container>
  );
};
