import React from 'react'

const Header = ({title,subtitle}) => {
  return (
    <div className=''>
       <h1 className='font-bold text-6xl'>{title}</h1>
       <br/>
       <h2 className='text-6xl font-semibold'>{subtitle}</h2>
      </div>
  )
}

export default Header