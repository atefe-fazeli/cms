import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "../Comments.css";

export default function AnswerCommentModal({
    comment,
    openAnswerComment,
    answerCommentHandler,
}) {
  return ReactDOM.createPortal(
    <div className={`modal-parent ${openAnswerComment && "active"}`}>
      <div className="details-modal">
        <p className="text-modal">{comment.body}</p>
        <button className="text-modal-close-btn" onClick={answerCommentHandler}>
          بستن
        </button>
      </div>
    </div>,
    document.getElementById("modals-parent")
  );
}
