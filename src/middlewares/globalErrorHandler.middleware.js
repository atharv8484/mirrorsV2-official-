

function globalErrorHandler  (err , req ,  res ,  next){

   console.log("==============ERROR  HANDLER==============")

   let error = err
   console.log(error.message)

   res.status(err.status).json({
      error:err.status ===  500?"Internal Server  error":err.message,
      status:err.status,
      success:false
      
   })
}

export default globalErrorHandler