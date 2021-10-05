import "./fullComment.css";
import http from "../../services/httpService";
import { useEffect, useState } from "react";
const FullComment = ({ commentId, setComments, setSelectedId }) => {
  const [comment, setComment] = useState(null);

  useEffect(() => {
    if (commentId) {
      http
        .get(`/comments/${commentId}`)
        .then((res) => setComment(res.data))
        .catch();
    }
  }, [commentId]);

  const deleteHandler = async () => {
    try {
      await http.delete(`/comments/${commentId}`);
      const { data } = await http.get("/comments");
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
