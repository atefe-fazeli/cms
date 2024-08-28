import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "../Comments.css";

export default function ConfirmCommentModal({
    comment,
    openConfirmComment,
    confirmCommentHandler
}) {
  return ReactDOM.createPortal(
    <div className={`modal-parent ${openConfirmComment && "active"}`}>
      <div className="details-modal">
        <p className="text-modal">{comment.body}</p>
        <button className="text-modal-close-btn" onClick={confirmCommentHandler}>
          بستن
        </button>
      </div>
    </div>,
    document.getElementById("modals-parent")
  );
}
