import React from "react";
import "./productsTable.css";
import ProductItem from "./productItem";

export default function productsTable({data,getAllProducts}) {
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
        {data.map(item=><ProductItem key={item.id} data={item} getAllProducts={getAllProducts}/>)}
        
      </table>
    </div>
  );
}
