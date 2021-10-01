import axios from "axios";
import { useState } from "react";
import "./newComment.css";

const NewComment = () => {
  const [comment, setComment] = useState({ name: "", email: "", content: "" });

  const nameHandler = (e) => {
    setComment({ ...comment, name: e.target.value });
  };

  const emailHandler = (e) => {
    setComment({ ...comment, email: e.target.value });
  };

  const contentHandler = (e) => {
    setComment({ ...comment, content: e.target.value });
  };

  const postCommentHandler = (e) => {
    axios
      .post("https://jsonplaceholder.typicode.com/comments", comment)
      .then((res) => console.log(res.data))
      .catch();
  };

  return (
    <div className="newComment">
      <div>
        <label>name</label>
        <input type="text" onChange={nameHandler} />
      </div>
      <div>
        <label>email</label>
        <input type="email" onChange={emailHandler} />
      </div>
      <div>
        <label>body</label>
        <textarea type="textarea" onChange={contentHandler} />
      </div>
      <button onClick={postCommentHandler}>add new comment</button>
    </div>
  );
};

export default NewComment;
