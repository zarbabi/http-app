import "./fullComment.css";
import { useEffect, useState } from "react";
import { deleteComment } from "../../services/deleteCommentService";
import { getAllComments } from "../../services/getAllCommentsService";
import { getOneComments } from "../../services/getOneCommentService";

const FullComment = ({ setComments, setSelectedId, match }) => {
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
      const { data } = await getAllComments(commentId);
      setComments(data);
      setSelectedId(null);
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
