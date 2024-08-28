import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "../Comments.css";

export default function EditCommentModal({
  id,
  openEditComment,
  editCommentHandler,
}) {
  function editCommentItemHandler(){

  }
  return ReactDOM.createPortal(
    <div className={`modal-parent ${openEditComment && "active"}`}>
      <div className="details-modal">
        <textarea
          value={comment.body}
          onChange={(event) => setMainCommentBody(event.target.value)}
        ></textarea>
        <button
          className="delete-btn delete-modal-accept-btn"
          onClick={() => editCommentItemHandler(id)}
        >
          تایید
        </button>
        <button className="text-modal-close-btn" onClick={editCommentHandler}>
          بستن
        </button>
      </div>
    </div>,
    document.getElementById("modals-parent")
  );
}
