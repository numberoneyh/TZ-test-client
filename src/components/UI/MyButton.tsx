import { FC } from 'react'

interface MyButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  title: string
}

export const MyButton: FC<MyButtonProps> = ({ title, ...props }) => {
  return (
    <button className='rounded-sm font-bold px-4 py-1 bg-white' {...props}>
      {title}
    </button>
  )
}
