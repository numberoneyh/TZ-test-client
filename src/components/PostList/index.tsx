import { FC } from 'react'
import { IProduct } from '../../models/models'

interface PostListProps {
  data: IProduct[] | undefined
}

export const PostList: FC<PostListProps> = ({ data }) => {
  const models: string[] = ['№', 'Дата', 'Название', 'Количество']
  return (
    <table className='table-auto border-collapse border border-slate-500 w-full text-center'>
      <thead className='bg-[#334155] text-white'>
        <tr>
          {models.map(model => (
            <th key={model} className='border border-slate-600'>
              {model}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className='bg-[#1e293b] text-[#8b9aaf]'>
        {data?.map(post => (
          <tr key={post.id}>
            <td className='font-medium border border-slate-600'>{post.id}</td>
            <td className='font-medium border border-slate-600'>
              {post.modeldata}
            </td>
            <td className='font-medium border border-slate-600'>
              {post.model}
            </td>
            <td className='font-medium border border-slate-600'>
              {post.count}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
