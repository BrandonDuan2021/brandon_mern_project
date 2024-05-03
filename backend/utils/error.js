export const errorHandler = (statusCode, msg) => {
    const error = new Error()
    error.statusCode = statusCode
    error.message = msg
    console.log(error)
    return error
}