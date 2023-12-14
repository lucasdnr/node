// import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

import Post from "./Post";
import classes from "./PostsList.module.css";

function PostsList() {
  // get data from loader
  const posts = useLoaderData();

  // when you update state the componant gets executed again by React, so this fetch may
  // will catch in a infinite loop. For this issue we use useEffect Hook
  // the second argument (array) we will control when this function gets executed
  // the array specifies the dependencies, when this dependencies (variables or functions)
  // has their values changed the useEffect function will be executed
  // if this argumento is empty it means that the useEffect function gets executed only once
  // when the component is first rendered
  // useEffect(() => {
  //   async function fetchPosts() {
  //     setIsFetching(true);
  //     setPosts(resData.posts);
  //     setIsFetching(false);
  //   }
  //   fetchPosts();
  // }, []);

  function addPostHandler(postData) {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // when we want to update a state and the new state is based on the previous state
    // we need to pass a function
    setPosts((existingPosts) => [postData, ...existingPosts]);
    // This other solution works but is not ideal, possible issues with multiple
    // pending state updates
    // setPosts([postData, ...posts]);
  }

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}

export default PostsList;
