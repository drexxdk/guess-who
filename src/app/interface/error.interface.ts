export interface ParsedErrorResponse {
  title?: string,
  error: ParsedErrorResponseObject
}

interface ParsedErrorResponseObject {
  message: string,
  stack: string
}
