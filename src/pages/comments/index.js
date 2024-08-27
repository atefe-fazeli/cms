import React, { useEffect, useState } from "react";
import Error from "../../globalComponents/errorComponent/error";
import CommentsItem from "./components/commentsItem";

export default function Comments() {
  const [allComments, setAllComments] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/comments")
      .then((res) => res.json())
      .then((comments) => setAllComments(comments));
  }, []);

  return (
    <div className="cms-main">
      {allComments.length ? (
        <table className="cms-table">
          <thead>
            <tr>
              <th>اسم کاربر</th>
              <th>محصول</th>
              <th>کامنت</th>
              <th>تاریخ</th>
              <th>ساعت</th>
            </tr>
          </thead>
          <tbody>
            {allComments.map((comment) => (
              <CommentsItem comment={comment} />
            ))}
          </tbody>
        </table>
      ) : (
        <Error text="هیچ کامنتی یافت نشد" />
      )}
    </div>
  );
}
