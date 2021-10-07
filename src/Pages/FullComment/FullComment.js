import "./fullComment.css";
import { useEffect, useState } from "react";
import { deleteComment } from "../../services/deleteCommentService";
import { getOneComments } from "../../services/getOneCommentService";

const FullComment = ({ match, history }) => {
  const [comment, setComment] = useState(null);
  const commentId = match.params.id;
  useEffect(() => {
    if (commentId) {
      getOneComments(commentId)
        .then((res) => setComment(res.data))
        .catch();
    }
  }, [commentId]);

  const deleteHandler = async () => {
    try {
      await deleteComment(commentId);
      history.push("/");
      setComment(null);
    } catch (error) {}
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
