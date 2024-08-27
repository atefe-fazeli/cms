import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./DeleteModal.css";
import "../../../../../src/cms.css";

export default function DeleteModal({
  isOpenModal,
  openModalHandler,
  id,
  deleteProductHandler,
}) {
  return ReactDOM.createPortal(
    <div className={`modal-parent ${isOpenModal && "active"}`}>
      <div className="delete-modal">
        <h1>آیا از حذف اطمینان دارید؟</h1>
        <div className="delete-modal-btns">
          <button
            className="delete-btn delete-modal-accept-btn"
            onClick={() => deleteProductHandler(id)}
          >
            بله
          </button>
          <button
            className="delete-btn delete-modal-reject-btn"
            onClick={openModalHandler}
          >
            خیر
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modals-parent")
  );
}
