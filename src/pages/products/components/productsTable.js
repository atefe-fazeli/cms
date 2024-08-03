import React from "react";
import "./productsTable.css";
import ProductItem from "./productItem";

export default function productsTable() {
  return (
    <div className="table-container">
      <table className="products-table">
        <tr className="products-table-heading-tr">
          <th>عکس</th>
          <th>اسم</th>
          <th>قیمت</th>
          <th>موجودی</th>
          <th>عملیات</th>
        </tr>
        <ProductItem />
      </table>
    </div>
  );
}
