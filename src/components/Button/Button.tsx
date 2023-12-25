import React, { FC, ReactNode } from "react"

interface Props{
    children: ReactNode | ReactNode[]
}

const Button:FC<Props> = ({children}) => {
  return (
    <>
<button style={{
  padding: '5rem 10rem',
  background: 'red',
  color: 'white'
}}>{children}</button>
<h1>This is for testing button ui</h1>
<a href="https://www.npmjs.com/package/ui-khemraj">Click here</a>
</>
  )
}

export default Button