import React, { useRef, useState } from "react";
import "./addNewProduct.css";
import axios from "axios";
import { AddproductURL } from "../../../setup/api/apiRoutes";
import { toast } from "react-toastify";

export default function AddNewProduct() {
  const productNewTitleRef = useRef(null);
  const productNewPriceRef = useRef(null);
  const productNewCountRef = useRef(null);
  const productNewImgRef = useRef(null);
  const productNewPopularityRef = useRef(null);
  const productNewSaleRef = useRef(null);
  const productNewColorsRef = useRef(null);
  
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
      axios
        .post(AddproductURL,productNewInfo)
        .then((response) => {
          console.log(response);
          toast.info("محصول جدید با موفقیت اضافه شد");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("else");
      toast.error("لطفا تمامی اطلاعات را وارد نمایید.");
    }
  }
  return (
    <div className="products-main">
      <h1 className="products-title">افزودن محصول جدید</h1>
      <div className="add-products-form-wrap">
        <div className="add-products-form-group">
          <input
            type="text"
            placeholder="اسم محصول را بنویسید"
            className="add-products-input"
            ref={productNewTitleRef}

          />
        </div>
        <div className="add-products-form-group">
          <input
            type="text"
            placeholder="قیمت محصول را بنویسید"
            className="add-products-input"
            ref={productNewPriceRef}

          />
        </div>
        <div className="add-products-form-group">
          <input
            type="text"
            placeholder="موجودی محصول را بنویسید"
            className="add-products-input"
            ref={productNewCountRef}

          />
        </div>
        <div className="add-products-form-group">
          <input
            type="text"
            placeholder="آدرس عکس محصول را بنویسید"
            className="add-products-input"
            ref={productNewImgRef}

          />
        </div>
        <div className="add-products-form-group">
          <input
            type="text"
            placeholder="میزان محبوبیت محصول را بنویسید"
            className="add-products-input"
            ref={productNewPopularityRef}

          />
        </div>
        <div className="add-products-form-group">
          <input
            type="text"
            placeholder="میزان فروش محصول را بنویسید"
            className="add-products-input"
            ref={productNewSaleRef}

          />
        </div>
        <div className="add-products-form-group">
          <input
            type="text"
            placeholder="تعداد رنگ بندی محصول را بنویسید"
            className="add-products-input"
            ref={productNewColorsRef}

          />
        </div>
        <div className="add-products-submit-container">
          <button className="add-products-submit" onClick={submitInfoHandler}>ثبت محصول</button>
        </div>
      </div>
    </div>
  );
}
