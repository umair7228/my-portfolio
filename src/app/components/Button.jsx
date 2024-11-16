import React from 'react'

const Button = ({children, className=''}) => {
  return (
    <button className={`text-foreground/90 select-none lg:px-3 lg:py-1 xl:px-3 2xl:px-4 2xl:py-2 rounded-[40px] hover:text-accent custom-bg ${className}`}>
        {children}
    </button>
  )
}

export default Button
