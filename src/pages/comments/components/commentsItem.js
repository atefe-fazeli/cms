import { useState } from "react";

function CommentsItem({ data }) {
  const [openShowComment, setOpenShowComments] = useState(false);
  function showCommentHandler() {
    setOpenShowComments((prev) => !prev);
  }
  return (
    <tbody>
      {data.map((comment) => (
        <tr key={comment.id}>
          <td>{comment.userID}</td>
          <td>{comment.productID}</td>
          <td>
            <button onClick={showCommentHandler}>دیدن متن</button>
          </td>
          <td>{comment.date}</td>
          <td>{comment.hour}</td>
          <td>
            <button>حذف</button>
            <button>ویرایش</button>
            <button>پاسخ</button>
            <button>تایید</button>
          </td>
        </tr>
      ))}
    </tbody>
  );
}
export default CommentsItem;
