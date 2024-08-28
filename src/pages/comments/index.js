import React, { useEffect, useState } from "react";
import Error from "../../globalComponents/errorComponent/error";
import CommentsItem from "./components/commentsItem";
import { commentsURL } from "../../setup/api/apiRoutes";

export default function Comments() {
  const [allComments, setAllComments] = useState([]);

  useEffect(() => {
    fetch(commentsURL)
      .then((res) => res.json())
      .then((comments) => setAllComments(comments));
  }, []);

  function updateCommentsAfterDelete(id) {
    setAllComments(allComments.filter((item) => item.id != id));
  }

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
              <CommentsItem comment={comment} key={comment.id} updateCommentsAfterDelete={updateCommentsAfterDelete}/>
            ))}
          </tbody>
        </table>
      ) : (
        <Error text="هیچ کامنتی یافت نشد" />
      )}
    </div>
  );
}
