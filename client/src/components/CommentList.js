const CommentList = ({ comments }) => {
  const renderedComments = comments.map((comment) => (
    <li key={comment.id}>
      <h5>{comment.content}</h5>
    </li>
  ));

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
