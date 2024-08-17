class Response {
  constructor(initial_res) {
   
    this.status = initial_res?.data?.data?.statusCode;
    this.message = initial_res?.data?.data?.message;
    this.data = initial_res?.data?.data;
    this.result = initial_res?.data?.data?.result;
    this.pagination = initial_res?.data?.data?.pagination;
  }
}
export default Response;
