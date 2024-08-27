import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "../Comments.css";

export default function editCommentModal({
  comment,
  openEditComment,
  editCommentHandler,
}) {
  return ReactDOM.createPortal(
    <div className={`modal-parent ${openShowComment && "active"}`}>
      <div className="details-modal">
        <p className="text-modal">{comment.body}</p>
        <button className="text-modal-close-btn" onClick={showCommentHandler}>
          بستن
        </button>
      </div>
    </div>,
    document.getElementById("modals-parent")
  );
}
