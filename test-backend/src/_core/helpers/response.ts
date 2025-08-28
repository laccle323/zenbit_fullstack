export enum ResponseCode {
  SUCCESS = 200,
  OTP = 201,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  VALIDATION_ERROR = 405,
  BALANCE_ERROR = 406,
  DUPLICATED_ERROR = 407,
  NOT_PAID_DEPOSIT = 408,
  CACHE_TIMEOUT = 409,
  PERMISSION_ERROR = 410,
  TIMEOUT_ERROR,
  INTERNAL_ERORR = 500
}

export async function response(res: any) {
  if (res.code === ResponseCode.SUCCESS)
    return success(res.message, res.data);
  else return error(res.code, res.message);
}

export async function success(message: string, data?: any) {
  return {
    code: ResponseCode.SUCCESS,
    message: message,
    data: data
  };
}

export async function error(code: any, message: string, data?: any) {
  return {
    code: code,
    message: message,
    data: data
  };
}
