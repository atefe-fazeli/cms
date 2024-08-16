import React, { useState } from "react";
import "./productItem.css";
import DeleteModal from "../../../globalComponents/DeleteModal/DeleteModal";
import DetailsModal from "../../../globalComponents/DetailsModal/DetailsModal";
import EditModal from "../../../globalComponents/EditModal/EditModal";

export default function ProductItem() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenDetailModal, setIsOpenDetailModal] = useState(false);
  const [isOpenEditlModal, setIsOpenEditModal] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    console.log("kili")
  }
  function openModalHandler() {
    setIsOpenModal(!isOpenModal);
  }
  function openDetailModalHandler() {
    setIsOpenDetailModal(!isOpenDetailModal);
  }
  function openEditModalHandler() {
    setIsOpenEditModal(!isOpenEditlModal);
  }
  return (
    <>
      <tr className="products-table-heading-tr">
        <td>
          <img
            src="/img/oil.jpeg"
            alt="oil image"
            className="products-table-img"
          />
        </td>
        <td>روغن سرخ کردنی</td>
        <td>92000 تومان</td>
        <td>82</td>
        <td>
          <button
            className="products-table-btn"
            onClick={openDetailModalHandler}
          >
            جزییات
          </button>
          <button className="products-table-btn" onClick={openModalHandler}>
            حذف
          </button>
          <button className="products-table-btn" onClick={openEditModalHandler}>ویرایش</button>
        </td>
      </tr>
      <DeleteModal
        isOpenModal={isOpenModal}
        openModalHandler={openModalHandler}
      />
      <DetailsModal
        isOpenDetailModal={isOpenDetailModal}
        openDetailModalHandler={openDetailModalHandler}
      />
      <EditModal
        isOpenEditlModal={isOpenEditlModal}
        openEditModalHandler={openEditModalHandler}
        onSubmit={onSubmit}
      />
    </>
  );
}
