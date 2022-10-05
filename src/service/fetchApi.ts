import { IParams, IResponse } from './../models/models'
import axios from 'axios'

export const fetchApi = async (params: IParams) => {
  const { limit, page, sort, search } = params
  const { data } = await axios.get<IResponse>(
    (process.env.REACT_APP_BAZE_URL as string) +
      `?limit=${limit}&page=${page}&model=${search}&sort=${sort}`
  )
  return data
}
