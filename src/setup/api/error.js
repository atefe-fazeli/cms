class Error {
  constructor(initial_err) {
    this.status = initial_err?.response?.status;
    this.message = initial_err?.response?.data?.data?.message;
  }
}
export default Error;
