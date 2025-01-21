import React from 'react'

const Container = ({children, className}: {children: React.ReactNode, className?: string} ) => {
  return (
    <div  className={`parralax-wrap p-7 xl:px-16 xl:pt-36 w-full h-full ${
      className || ""
    }`}>
      {children}
    </div>
  )
}

export default Container
