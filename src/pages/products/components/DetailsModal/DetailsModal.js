import React from "react";
import "./DetailsModal.css";
import "../../../../../src/cms.css";



export default function DetailsModal({isOpenDetailModal,openDetailModalHandler,data}) {
  return (
    <div className={`modal-parent ${isOpenDetailModal && "active"}`} onClick={openDetailModalHandler}>
      <div className="details-modal">
        <table className="cms-table">
          <tr>
            <th>رنگبندی</th>
            <th>فروش</th>
            <th>محبوبیت</th>
          </tr>

          <tr id={data.id}>
            <td>{data.colors}</td>
            <td>{data.sale}</td>
            <td>{data.popularity}</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
