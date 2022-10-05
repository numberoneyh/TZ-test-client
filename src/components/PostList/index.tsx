import { FC } from 'react'
import { IProduct } from '../../models/models'
import style from './index.module.css'

interface PostListProps {
  data: IProduct[] | undefined
}

export const PostList: FC<PostListProps> = ({ data }) => {
  const models: string[] = ['№', 'Дата', 'Название', 'Количество']
  return (
    <div className={style.wrapper}>
      <table className={style.table}>
        <thead className={style.thead}>
          <tr>
            {models.map(model => (
              <th key={model} className={style.th}>
                {model}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={style.tbody}>
          {data?.map(post => (
            <tr key={post.id}>
              <td className={style.td}>{post.id}</td>
              <td className={style.td}>{post.modeldata}</td>
              <td className={style.td}>{post.model}</td>
              <td className={style.td}>{post.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
