import React from 'react'

import Link from 'next/link';
const Sidebar = ({items,  language}) => {
 
  return (
    <div className=' overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-thumb scrollbar-track-track'>
       <ul>
        {items.map((item, index) => (
          <li key={index}>
            <Link href={`/Learner/${language}/${item.replace(/\s+/g, '-')}`}><button className='bg-orange-400 p-2 m-1 w-full'>{item}</button></Link>
          </li>
        ))}
      </ul>

    </div>
    
  )
}

export default Sidebar
