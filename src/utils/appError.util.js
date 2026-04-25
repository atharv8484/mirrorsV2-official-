class AppeError extends Error {
  constructor(message, statusCode=500) {
    super(message);
    this.status = statusCode;
    this.isOptional = true;

    //Stack trace shows where the error occurred and the sequence of function calls that led to it

    // It attaches a stack trace to the custom error class
    // 1st parameter → WHERE to attach the stack trace
    // 2nd parameter → WHERE to START the stack trace from
    Error.captureStackTrace(this, this.constructor);
  }
}

export default AppeError