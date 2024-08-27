import { useState } from "react";
import ShowCommentModal from "./showCommentModal";

function CommentsItem({ comment }) {
  const [openShowComment, setOpenShowComments] = useState(false);
  const [openDeleteComment, setOpenDeleteComments] = useState(false);
  const [openEditComment, setOpenEditComments] = useState(false);
  const [openConfirmComment, setOpenConfirmComments] = useState(false);
  const [openAnswerComment, setOpenAnswerComments] = useState(false);

  function showCommentHandler() {
    setOpenShowComments((prev) => !prev);
  }

  function deleteCommentHandler() {
    setOpenDeleteComments((prev) => !prev);
  }

  function editCommentHandler() {
    setOpenEditComments((prev) => !prev);
  }

  function confirmCommentHandler() {
    setOpenConfirmComments((prev) => !prev);
  }

  function answerCommentHandler() {
    setOpenAnswerComments((prev) => !prev);
  }

  return (
    <>
      <tr key={comment.id}>
        <td>{comment.userID}</td>
        <td>{comment.productID}</td>
        <td>
          <button onClick={showCommentHandler}>دیدن متن</button>
        </td>
        <td>{comment.date}</td>
        <td>{comment.hour}</td>
        <td>
          <button>حذف</button>
          <button>ویرایش</button>
          <button>پاسخ</button>
          <button>تایید</button>
        </td>
      </tr>

      <ShowCommentModal comment={comment} openShowComment={openShowComment} showCommentHandler={showCommentHandler}/>
      <editCommentModal />
    </>
  );
}
export default CommentsItem;
