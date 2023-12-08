const conflictError = (msg, code = 'CONFLICT') => {
  let err = new Error()
  err.code = code
  err.httpStatus = 409
  err.message = msg
  throw err
}

const notFoundError = (msg, code = 'NOT_FOUND') => {
  let err = new Error()
  err.code = code
  err.httpStatus = 404
  err.message = msg
  throw err
}

const notAuthorizedError = (msg, code = 'UNAUTHORIZED') => {
  let err = new Error()
  err.code = code
  err.httpStatus = 401
  err.message = msg
  throw err
}

const forbiddenError = (msg, code = 'FORBIDDEN') => {
  let err = new Error()
  err.code = code
  err.httpStatus = 403
  err.message = msg
  throw err
}

const internalServerError = (msg, code = 'INTERNAL_ERROR') => {
  let err = new Error()
  err.code = code
  err.httpStatus = 500
  err.message = msg
  throw err
}


const badRequestError = (msg, code = 'BAD_REQUEST_ERROR') => {
  let err = new Error()
  err.code = code
  err.httpStatus = 400
  err.message = msg
  throw err
}

const sendEmailError = (msg = 'Error al enviar el email') => {
  internalServerError(msg, 'SEND_EMAIL_ERROR')
}

const schemaValidationError = (msg = 'Error en la validación de los datos')=>{
  badRequestError(msg);
}

export default {
  conflictError,
  notFoundError,
  notAuthorizedError,
  forbiddenError,
  internalServerError,
  sendEmailError,
  badRequestError,
  schemaValidationError
}
