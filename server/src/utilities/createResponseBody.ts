type ResponseType = { ok: boolean; data?: any; message: string }

export const createResponseBody = (response: ResponseType) => response
