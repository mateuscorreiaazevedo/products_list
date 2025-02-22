import type {
  HttpClientContract,
  HttpClientRequest,
  HttpClientResponse,
} from '@/shared/contracts'
import type { AxiosError, AxiosInstance, AxiosResponse } from 'axios'
import axios from 'axios'

export class AxiosHttpClientService implements HttpClientContract {
  private instance: AxiosInstance

  constructor(private readonly BASE_URL = process.env.NEXT_PUBLIC_BASE_URL) {
    this.instance = axios.create({
      baseURL: this.BASE_URL,
    })
  }
  async request<B = any, K = unknown>(
    props: HttpClientRequest<B>,
  ): Promise<HttpClientResponse<K>> {
    const { method, url, body, headers, params } = props
    let response: AxiosResponse

    try {
      response = await this.instance.request<B>({
        url,
        method,
        data: body,
        ...(headers && { headers }),
        ...(params && { params }),
      })
    } catch (error) {
      response = (error as AxiosError).response as AxiosResponse
    }

    return {
      data: response.data,
      statusCode: response.status,
    }
  }
}
