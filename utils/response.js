function responseServer(response, statusCode, message, data) {
  const responseData = {
    statusCode: statusCode,
    message,
  };
  if (data) {
    responseData.data = data;
  }
  response.status(statusCode).json(responseData);
}

function raiseException(response, statusCode, message, error) {
  const exceptionBody = {
    statusCode: statusCode,
    message,
  };
  if (error) {
    exceptionBody.error = error;
  }
  return response.status(statusCode).json(exceptionBody);
}
module.exports = { responseServer, raiseException };
