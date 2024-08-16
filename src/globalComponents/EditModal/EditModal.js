import React from "react";
import "./EditModal.css";

export default function EditModal({ children,isOpenEditlModal,openEditModalHandler ,onSubmit }) {
  return (
    <div className={`modal-parent ${isOpenEditlModal && "active"}`} onClick={openEditModalHandler}>
      <form className="edit-modal-form">
        <h1>اطلاعات جدید را وارد نمایید</h1>
        {children}
        <button className="edit-form-submit" onClick={e=>onSubmit(e)}>
          ثبت اطلاعات جدید
        </button>
      </form>
    </div>
  );
}
