import axios from "axios";
import { useState } from "react";
import "./newComment.css";

const NewComment = ({ setComments }) => {
  const [comment, setComment] = useState({ name: "", email: "", content: "" });

  const changeHandler = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };

  const postCommentHandler = () => {
    axios
      .post("http://localhost:3001/comments", comment)
      .then((res) => axios.get("http://localhost:3001/comments"))
      .then((res) => setComments(res.data))
      .catch();
  };

  return (
    <div className="newComment">
      <div>
        <label>name</label>
        <input type="text" onChange={changeHandler} name="name" />
      </div>
      <div>
        <label>email</label>
        <input type="email" onChange={changeHandler} name="email" />
      </div>
      <div>
        <label>body</label>
        <textarea type="textarea" onChange={changeHandler} name="content" />
      </div>
      <button onClick={postCommentHandler}>add new comment</button>
    </div>
  );
};

export default NewComment;
