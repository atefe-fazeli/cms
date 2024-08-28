import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "../Comments.css";
import { deleteCommentURL } from "../../../setup/api/apiRoutes";
import axios from "axios";

export default function DeleteCommentModal({
  id,
  openDeleteComment,
  deleteCommentHandler,updateCommentsAfterDelete
}) {
  function deleteCommentItemHandler() {
    axios
      .delete(deleteCommentURL(id))
      .then((response) => {
        console.log(response);
        deleteCommentHandler()
        updateCommentsAfterDelete(id)
      })
      .catch((er) => {
        console.log(er);
      });
  }
  return ReactDOM.createPortal(
    <div className={`modal-parent ${openDeleteComment && "active"}`}>
      <div className="delete-modal">
        <h1>آیا از حذف اطمینان دارید؟</h1>
        <div className="delete-modal-btns">
          <button
            className="delete-btn delete-modal-accept-btn"
            onClick={() => deleteCommentItemHandler(id)}
          >
            بله
          </button>
          <button
            className="delete-btn delete-modal-reject-btn"
            onClick={deleteCommentHandler}
          >
            خیر
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modals-parent")
  );
}
