import React, { useRef, useState } from "react";
import "./EditModal.css";
import { IoIosClose } from "react-icons/io";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { toast } from "react-toastify";
import { updateProductURL } from "../../../../setup/api/apiRoutes";
import axios from "axios";

export default function EditModal({
  isOpenEditlModal,
  openEditModalHandler,
  id,
  data,
}) {
  const productNewTitleRef = useRef(null);
  const productNewPriceRef = useRef(null);
  const productNewCountRef = useRef(null);
  const productNewImgRef = useRef(null);
  const productNewPopularityRef = useRef(null);
  const productNewSaleRef = useRef(null);
  const productNewColorsRef = useRef(null);
  const [error, setError] = useState("");

  function submitInfoHandler() {
    console.log(productNewTitleRef.current.value);
    console.log(productNewPriceRef.current.value);
    console.log(productNewCountRef.current.value);
    console.log(productNewImgRef.current.value);
    console.log(productNewPopularityRef.current.value);
    console.log(productNewSaleRef.current.value);
    console.log(productNewColorsRef.current.value);

    let productNewInfo = {
      title: productNewTitleRef.current.value,
      price: productNewPriceRef.current.value,
      count: productNewCountRef.current.value,
      img: productNewImgRef.current.value,
      popularity: productNewPopularityRef.current.value,
      sale: productNewSaleRef.current.value,
      colors: productNewColorsRef.current.value,
    };
    if (Object.values(productNewInfo).every((item) => item != "")) {
      setError("");
      axios
        .put(updateProductURL(id),productNewInfo)
        .then((response) => {
          console.log(response);
          openEditModalHandler()
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("else");
      setError("لطفا تمامی اطلاعات را وارد نمایید.");
    }
  }

  return (
    <div className={`modal-parent ${isOpenEditlModal && "active"}`}>
      <div className="edit-modal-form">
        <div className="edit-modal-form-title">
          <h1>اطلاعات جدید را وارد نمایید</h1>
          <button onClick={openEditModalHandler}>
            <IoIosClose />
          </button>
        </div>
        <div className="edit-proructs-form-group">
          <span>
            <AiOutlineDollarCircle />
          </span>
          <input
            type="text"
            placeholder="عنوان جدید را وارد کنید"
            className="edit-product-input"
            ref={productNewTitleRef}
            name="productNewTitle"
            
          />
        </div>

        <div className="edit-proructs-form-group">
          <span>
            <AiOutlineDollarCircle />
          </span>
          <input
            type="text"
            placeholder="قیمت جدید را وارد کنید"
            className="edit-product-input"
            ref={productNewPriceRef}
          />
        </div>
        <div className="edit-proructs-form-group">
          <span>
            <AiOutlineDollarCircle />
          </span>
          <input
            type="text"
            placeholder="موجودی جدید را وارد کنید"
            className="edit-product-input"
            ref={productNewCountRef}
          />
        </div>
        <div className="edit-proructs-form-group">
          <span>
            <AiOutlineDollarCircle />
          </span>
          <input
            type="text"
            placeholder="آدرس کاور جدید را وارد کنید"
            className="edit-product-input"
            ref={productNewImgRef}
          />
        </div>
        <div className="edit-proructs-form-group">
          <span>
            <AiOutlineDollarCircle />
          </span>
          <input
            type="text"
            placeholder="محبوبیت جدید را وارد کنید"
            className="edit-product-input"
            ref={productNewPopularityRef}
            
          />
        </div>
        <div className="edit-proructs-form-group">
          <span>
            <AiOutlineDollarCircle />
          </span>
          <input
            type="text"
            placeholder="میزان فروش جدید را وارد کنید"
            className="edit-product-input"
            ref={productNewSaleRef}
          />
        </div>
        <div className="edit-proructs-form-group">
          <span>
            <AiOutlineDollarCircle />
          </span>
          <input
            type="text"
            placeholder="تعداد رنگ بندی جدید را وارد کنید"
            className="edit-product-input"
            ref={productNewColorsRef}
          />
        </div>
        <p className="edit-product-error">{error}</p>
        <button className="edit-form-submit" onClick={submitInfoHandler}>
          ثبت اطلاعات جدید
        </button>
      </div>
    </div>
  );
}
