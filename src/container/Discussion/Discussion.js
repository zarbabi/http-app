import Comment from "../../components/Comment/Comment";
import "./Discussion.css";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getAllComments } from "../../services/getAllCommentsService";
import { Link } from "react-router-dom";

const Discussion = () => {
  const [comments, setComments] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    //const getComments = async () =>
    const getComments = async () => {
      try {
        const { data } = await getAllComments();
        setComments(data);
      } catch (error) {
        console.log(error);
        setError(true);
      }
    };
    getComments();
  }, []);

  const selectCommentHandler = (id) => {
    setSelectedId(id);
  };

  const renderComments = () => {
    let renderValue = <p>Loading ...</p>;

    if (error) {
      renderValue = <p>fetching data failed !</p>;
      toast.error("there is an error !");
    }

    if (comments && !error) {
      renderValue = comments.map((c) => (
        <Link to={`/comment/${c.id}`} key={c.id}>
          <Comment
            name={c.name}
            email={c.email}
            onClick={() => selectCommentHandler(c.id)}
          />
        </Link>
      ));
    }
    return renderValue;
  };
  return (
    <main>
      <section>{renderComments()}</section>
      {/* <section>
        <FullComment
          commentId={selectedId}
          setComments={setComments}
          setSelectedId={setSelectedId}
        />
      </section>
      <section>
        <NewComment setComments={setComments} />
      </section> */}
    </main>
  );
};

export default Discussion;
