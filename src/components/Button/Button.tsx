import React, { FC, ReactNode } from "react"

interface Props{
    children: ReactNode | ReactNode[]
}

const Button:FC<Props> = ({children}) => {
  return (
<button style={{
  padding: '5rem 10rem',
  background: 'red',
  color: 'white'
}}>{children}</button>
  )
}

export default Button