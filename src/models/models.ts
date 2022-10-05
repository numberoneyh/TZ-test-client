export interface IProduct {
  id: number
  modeldata: number
  model: string
  count: number
}

export interface IResponse {
  count: number
  rows: IProduct[]
}

export interface IParams {
  limit?: number
  page?: number
  sort?: string
  count?: string
  id?: string
  search?: string
}
