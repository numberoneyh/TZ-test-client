import { FC } from 'react'
import style from './MyButton.module.scss'

interface MyButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  title: string
}

export const MyButton: FC<MyButtonProps> = ({ title, ...props }) => {
  return (
    <button className={style.root} {...props}>
      {title}
    </button>
  )
}
