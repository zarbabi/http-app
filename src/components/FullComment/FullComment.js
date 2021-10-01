import "./fullComment.css";
import axios from "axios";
import { useEffect, useState } from "react";
const FullComment = ({ commentId }) => {
  const [comment, setComment] = useState(null);

  useEffect(() => {
    if (commentId) {
      axios
        .get(`https://jsonplaceholder.typicode.com/comments/${commentId}`)
        .then((res) => setComment(res.data))
        .catch();
    }
  }, [commentId]);

  const deleteHandler = () => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/comments/${commentId}`)
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
  };
  let commentDetail = <p>please select a comment!</p>;

  if (commentId) commentDetail = <p>loading ...</p>;

  if (comment) {
    commentDetail = (
      <div className="fullComment">
        <p>{comment.name}</p>
        <p>{comment.email}</p>
        <p>{comment.body}</p>
        <button onClick={deleteHandler}>Delete</button>
      </div>
    );
  }
  return commentDetail;
};

export default FullComment;
