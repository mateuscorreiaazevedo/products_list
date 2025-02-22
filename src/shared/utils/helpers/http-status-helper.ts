import {
  type HttpClientErrorResponse,
  type HttpClientResponse,
  HttpClientStatusCode,
} from '@/shared/contracts'

export class HttpStatusHelper {
  static validate<K = unknown>(response: HttpClientResponse<K & HttpClientErrorResponse>): K {
    switch (response.statusCode) {
      case HttpClientStatusCode.OK:
        return response.data
      case HttpClientStatusCode.Created:
        return response.data
      case HttpClientStatusCode.NoContent:
        return response.data
      case HttpClientStatusCode.BadRequest:
        throw new Error(`Bad Request: ${response.data.message || 'Unknown error'}`)
      case HttpClientStatusCode.Unauthorized:
        throw new Error('Unauthorized')
      case HttpClientStatusCode.Forbidden:
        throw new Error('Forbidden')
      case HttpClientStatusCode.NotFound:
        throw new Error('Not Found')
      case HttpClientStatusCode.InternalServerError:
        throw new Error('Internal Server Error')
      case HttpClientStatusCode.ServiceUnavailable:
        throw new Error('Service Unavailable')
      default:
        throw new Error(`Unexpected status code: ${response.statusCode}`)
    }
  }
}
