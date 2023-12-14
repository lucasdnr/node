// import { useState } from "react";
import { Link, Form, redirect } from "react-router-dom";

import classes from "./NewPost.module.css";
import Modal from "../components/Modal";

function NewPost() {
  // const [enteredBody, setEnteredBody] = useState("");
  // // stateData[0] // current value
  // // stateData[1] // state updating function
  // const [enteredBody, setEnteredBody] = useState("");
  // const [enteredAuthor, setEnteredAuthor] = useState("");

  // function bodyChangeHandler(event) {
  //   setEnteredBody(event.target.value);
  // }

  // function authorChangeHandler(event) {
  //   setEnteredAuthor(event.target.value);
  // }

  // function submitHandler(event) {
  //   // prevent HTTP request
  //   event.preventDefault();
  //   const postData = {
  //     body: enteredBody,
  //     author: enteredAuthor,
  //   };
  // }

  return (
    <Modal>
      {/* <form className={classes.form} onSubmit={submitHandler}> */}
      <Form method="post" className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          {/* <textarea id="body" required rows={3} onChange={bodyChangeHandler} /> */}
          <textarea id="body" name="body" required rows={3} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          {/* <input
            type="text"
            id="name"
            required
            onChange={authorChangeHandler}
          /> */}
          <input type="text" id="name" name="author" required />
        </p>
        <p className={classes.actions}>
          <Link to=".." type="button">
            Cancel
          </Link>
          <button type="submit">Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;

export async function action({ request }) {
  const formData = await request.formdata();
  const postData = Object.fromEntries(formData);
  // add data
  await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return redirect("/");
}
