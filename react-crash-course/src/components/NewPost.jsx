import classes from "./NewPost.module.css";

function NewPost({ onBodyChange, onAuthorChange, onCancel }) {
  // const [enteredBody, setEnteredBody] = useState("");
  // // stateData[0] // current value
  // // stateData[1] // state updating function

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={onBodyChange} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={onAuthorChange} />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
