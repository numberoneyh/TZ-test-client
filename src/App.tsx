import { useEffect, useState } from 'react'
import { Filters } from './components/Filters'
import { PostList } from './components/PostList'
import { IResponse } from './models/models'
import { fetchApi } from './service/fetchApi'
import { getPageCount } from './utils'

export const App = () => {
  const [data, setData] = useState<IResponse>()
  const [totalPage, setTotalPage] = useState(0)
  const [search, setSearch] = useState<string>('')
  const [currentPage, setcurrentPage] = useState<number>(1)
  const [limit, setLimit] = useState<number>(15)
  const [sort, setSort] = useState<string>('')

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value)
  }

  const nextHandler = () => {
    if (totalPage > currentPage) setcurrentPage(currentPage + 1)
  }

  const prevHandler = () => {
    if (currentPage > 1) setcurrentPage(currentPage - 1)
  }

  const sortHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(e.target.value)
  }

  const limitHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLimit(parseInt(e.target.value))
  }

  useEffect(() => {
    fetchApi({
      limit: limit,
      page: currentPage,
      sort: sort,
      search: search,
    }).then(res => {
      setData(res)
      setTotalPage(getPageCount(res.count, limit))
    })
  }, [currentPage, limit, search, sort])

  return (
    <>
      <main className='container'>
        <div className='p-10 bg-[#131b2e] rounded-lg mt-8'>
          <PostList data={data?.rows} />
          <Filters
            searchHandler={searchHandler}
            nextHandler={nextHandler}
            prevHandler={prevHandler}
            limitHandler={limitHandler}
            sortHandler={sortHandler}
            search={search}
            totalPage={totalPage}
            currentPage={currentPage}
          />
        </div>
      </main>
    </>
  )
}

