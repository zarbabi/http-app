import { useState } from "react";
import "./newComment.css";
import { addNewComment } from "../../services/addNewCommentService";
import { getAllComments } from "../../services/getAllCommentsService";

const NewComment = ({ history }) => {
  const [comment, setComment] = useState({ name: "", email: "", content: "" });

  const changeHandler = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };

  const postCommentHandler = async () => {
    try {
      await addNewComment({ ...comment, posId: 10 });
      history.push("/");
    } catch (error) {}
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
