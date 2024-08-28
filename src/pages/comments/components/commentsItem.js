import { useState } from "react";
import ShowCommentModal from "./showCommentModal";
import EditCommentModal from "./editCommentModal";
import DeleteCommentModal from "./deleteCommentModal";
import ConfirmCommentModal from "./confirmComment";
import AnswerCommentModal from "./answerComment";


function CommentsItem({ comment,updateCommentsAfterDelete }) {
  const [openShowComment, setOpenShowComment] = useState(false);
  const [openDeleteComment, setOpenDeleteComment] = useState(false);
  const [openEditComment, setOpenEditComment] = useState(false);
  const [openConfirmComment, setOpenConfirmComment] = useState(false);
  const [openAnswerComment, setOpenAnswerComment] = useState(false);

  function showCommentHandler() {
    setOpenShowComment((prev) => !prev);
  }

  function deleteCommentHandler() {
    setOpenDeleteComment((prev) => !prev);
  }

  function editCommentHandler() {
    setOpenEditComment((prev) => !prev);
  }

  function confirmCommentHandler() {
    setOpenConfirmComment((prev) => !prev);
  }

  function answerCommentHandler() {
    setOpenAnswerComment((prev) => !prev);
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
          <button onClick={deleteCommentHandler}>حذف</button>
          <button onClick={editCommentHandler}>ویرایش</button>
          <button onClick={answerCommentHandler}>پاسخ</button>
          <button onClick={confirmCommentHandler}>تایید</button>
        </td>
      </tr>

      <ShowCommentModal
        comment={comment}
        openShowComment={openShowComment}
        showCommentHandler={showCommentHandler}
      />
      <EditCommentModal
        comment={comment}
        openEditComment={openEditComment}
        editCommentHandler={editCommentHandler}
      />
      <DeleteCommentModal
        id={comment.id}
        openDeleteComment={openDeleteComment}
        deleteCommentHandler={deleteCommentHandler}
        updateCommentsAfterDelete={updateCommentsAfterDelete}
      />
      <ConfirmCommentModal
        comment={comment}
        openConfirmComment={openConfirmComment}
        confirmCommentHandler={confirmCommentHandler}
      />
      <AnswerCommentModal
        comment={comment}
        openAnswerComment={openAnswerComment}
        answerCommentHandler={answerCommentHandler}
      />
    </>
  );
}
export default CommentsItem;
