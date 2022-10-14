import React from 'react'
import { NavLink } from 'react-router-dom'
import { SHOPWRAPPER } from '../../static/static'

const ProWrapper = () => {
  return (
    <div className=' flex flex-wrap'>
      <h1 className='text-center w-full bg-gray-700 text-white'>Products</h1>

    {
      SHOPWRAPPER?.map(({name,link,img},inx)=>(
        <NavLink  className='w-[350px] my-7 bg-[#0001] m-auto   flex  ' to={`/products/${link}`} key={inx} >
          <div className='flex flex-wrap' > 
             <img className='w-full' src={img} alt={name} />
             <h1 className='text-center py-2  mx-auto '>{name}</h1>
        </div>
        </NavLink>
      ))
    }
  </div>
  )
}

export default ProWrapper