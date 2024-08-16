import React from "react";
import "./DetailsModal.css";
import "../../../src/cms.css";


export default function DetailsModal({isOpenDetailModal,openDetailModalHandler}) {
  return (
    <div className={`modal-parent ${isOpenDetailModal && "active"}`} onClick={openDetailModalHandler}>
      <div className="details-modal">
        <table className="cms-table">
          <tr>
            <th>اسم</th>
            <th>قیمت</th>
            <th>محبوبیت</th>
          </tr>

          <tr>
            <td>لپتاپ</td>
            <td>۱۲،۰۰۰،۰۰۰</td>
            <td>91</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
