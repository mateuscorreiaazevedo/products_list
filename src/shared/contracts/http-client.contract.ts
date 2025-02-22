/**
 * Interface para representar uma solicitação HTTP.
 *
 * @property url - A URL da solicitação.
 * @property method - O método HTTP a ser utilizado (get, post, put, delete, patch).
 * @property params - Parâmetros adicionais para a solicitação, como query strings.
 * @property body - O corpo da solicitação, utilizado para enviar dados.
 * @property headers - Cabeçalhos HTTP adicionais.
 */
export interface HttpClientRequest<B = any> {
  url: string
  method: 'get' | 'post' | 'put' | 'delete' | 'patch'
  params?: Record<string, string | number | boolean>
  body?: B
  headers?: Record<string, string>
}

/**
 * Interface para representar uma resposta HTTP.
 *
 * @property data - Os dados retornados pela solicitação.
 * @property statusCode - O código de status HTTP da resposta.
 */
export interface HttpClientResponse<K = unknown> {
  data: K
  statusCode: number
}

export interface HttpClientErrorResponse {
  message?: string
}

/**
 * Enum para representar os códigos de status HTTP mais comuns.
 *
 * @enum {number}
 */
export enum HttpClientStatusCode {
  OK = 200,
  Created = 201,
  NoContent = 204,
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  InternalServerError = 500,
  ServiceUnavailable = 503,
}

/**
 * Classe abstrata para contratos de clientes HTTP.
 *
 * @abstract
 */
export abstract class HttpClientContract {
  /**
   * Método abstrato para realizar uma solicitação HTTP.
   *
   * @param props - As propriedades da solicitação.
   * @returns Uma promessa que resolve para uma resposta HTTP.
   * @returns <K, B> - K será a tipagem da resposta HTTP e B será a tipagem do body da requisição.
   */
  abstract request<K = unknown, B = any>(
    props: HttpClientRequest<B>,
  ): Promise<HttpClientResponse<K>>
}
