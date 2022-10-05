import React, { FC } from 'react'
import { MyButton } from '../UI/MyButton'

type option = {
  title: string
  value: string
}

interface FiltersProps {
  searchHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
  nextHandler: () => void
  prevHandler: () => void
  sortHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void
  limitHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void
  search: string
  totalPage: number
  currentPage: number
}

export const Filters: FC<FiltersProps> = ({
  nextHandler,
  prevHandler,
  searchHandler,
  sortHandler,
  limitHandler,
  search,
  totalPage,
  currentPage,
}) => {
  const option: option[] = [
    { title: 'Год выпуска', value: 'modeldata' },
    { title: 'Модель', value: 'model' },
    { title: 'Количество', value: 'count' },
    { title: 'По умолчанию', value: 'id' },
  ]

  const limit: number[] = [15, 25, 50, 75, 100]

  return (
    <div className='mt-4 flex justify-between px-4'>
      <div>
        <span className='text-white'>{currentPage} of </span>
        <span className='text-white'>{totalPage}</span>
      </div>
      <div className='flex gap-2'>
        <MyButton onClick={prevHandler} title='prev' />
        <MyButton onClick={nextHandler} title='next' />
      </div>
      <span className='font-bold text-white'>Limit:</span>

      <select
        className='rounded-sm font-medium px-4 py-1'
        onChange={limitHandler}>
        {limit.map(num => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>

      <input
        type='search'
        placeholder='Поиск...'
        className='rounded-sm px-4 py-1'
        value={search}
        onChange={searchHandler}
      />

      <select
        className='rounded-sm font-medium px-4 py-1'
        onChange={sortHandler}>
        {option.map((op, i) => (
          <option key={i} value={op.value}>
            {op.title}
          </option>
        ))}
      </select>
    </div>
  )
}
