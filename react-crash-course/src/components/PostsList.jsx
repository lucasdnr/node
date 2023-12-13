import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import Modal from "./Modal";
import classes from "./PostsList.module.css";

function PostsList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    // when we want to update a state and the new state is based on the previous state
    // we need to pass a function
    setPosts((existingPosts) => [postData, ...existingPosts]);
    // This other solution works but is not ideal, possible issues with multiple
    // pending state updates
    // setPosts([postData, ...posts]);
  }

  return (
    <>
      {isPosting ? (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      ) : null}
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
      </ul>
    </>
  );
}

export default PostsList;
