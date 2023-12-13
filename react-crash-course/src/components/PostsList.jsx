import Post from "./Post";
import classes from './PostsList.module.css'

function PostsList() {
  return (
    <ul className={classes.posts}>
      <Post author="Lucas" body="React.js is awesome!" />
      <Post author="Daniel" body="Nice to meet you" />
      <Post author="John" body="That is great!" />
    </ul>
  );
}

export default PostsList;
