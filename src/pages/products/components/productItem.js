import React from "react";
import "./productItem.css";

export default function ProductItem() {
  return (
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
        <button className="products-table-btn">جزییات</button>
        <button className="products-table-btn">حذف</button>
        <button className="products-table-btn">ویرایش</button>
      </td>
    </tr>
  );
}
