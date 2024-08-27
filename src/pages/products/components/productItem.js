import React, { useState } from "react";
import "./productItem.css";
import DeleteModal from "./DeleteModal/DeleteModal";
import DetailsModal from "./DetailsModal/DetailsModal";
import EditModal from "./EditModal/EditModal";
import axios from "axios";
import { deleteProductURL } from "../../../setup/api/apiRoutes";

export default function ProductItem({ data ,getAllProducts}) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenDetailModal, setIsOpenDetailModal] = useState(false);
  const [isOpenEditlModal, setIsOpenEditModal] = useState(false);

  function openModalHandler() {
    setIsOpenModal(!isOpenModal);
  }
  function openDetailModalHandler() {
    setIsOpenDetailModal(!isOpenDetailModal);
    console.log("modal detail",isOpenModal)

  }
  function openEditModalHandler() {
    setIsOpenEditModal(!isOpenEditlModal);
  }
  function deleteProductHandler(id) {
    console.log("delete here",deleteProductURL(id),"id is=>",id)
    axios
      .delete(deleteProductURL(id))
      .then((response) => {
        console.log(response);
      })
      .catch((er) => {
        console.log(er);
      });
      getAllProducts()
  }
  return (
    <>
      <tr className="products-table-heading-tr">
        <td>
          <img src={data.img} className="products-table-img" />
        </td>
        <td>{data.title}</td>
        <td>{data.price} تومان</td>
        <td>{data.count}</td>
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
          <button className="products-table-btn" onClick={openEditModalHandler}>
            ویرایش
          </button>
        </td>
      </tr>
      <DeleteModal
        isOpenModal={isOpenModal}
        openModalHandler={openModalHandler}
        id={data.id}
        deleteProductHandler={deleteProductHandler}
      />
      <DetailsModal
        isOpenDetailModal={isOpenDetailModal}
        openDetailModalHandler={openDetailModalHandler}
        data={data}
      />
      <EditModal
        isOpenEditlModal={isOpenEditlModal}
        openEditModalHandler={openEditModalHandler}
        id={data.id}
        data={data}
      />
    </>
  );
}
