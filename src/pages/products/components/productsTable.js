import React from "react";
import "./productsTable.css";
import ProductItem from "./productItem";

export default function productsTable({ data, getAllProducts }) {
  return (
    <div className="table-container">
      <table className="products-table">
        <thead>
          <tr className="products-table-heading-tr">
            <th>عکس</th>
            <th>اسم</th>
            <th>قیمت</th>
            <th>موجودی</th>
            <th>عملیات</th>

          </tr>
        </thead>{" "}
        <tbody>
          {data.map((item) => (
            <ProductItem
              key={item.id}
              data={item}
              getAllProducts={getAllProducts}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
