const baseURL = "http://localhost:8000/api/"
export const productsURL = baseURL +"products";
export const deleteProductURL =(id)=> baseURL +`products/${id}`;
export const updateProductURL = (id)=>baseURL +`products/${id}`;
export const AddproductURL =baseURL +"products";
export const commentsURL = baseURL +"comments";
export const deleteCommentURL =(id)=> baseURL +`comments/${id}`;
export const confirmCommentURL = (id)=>baseURL +`comments/${id}`;
export const editURL =(id)=>baseURL +`comments/${id}`;
