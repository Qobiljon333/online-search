import React from 'react'
import { SHOPWRAPPER } from '../../static/static'
import { NavLink } from 'react-router-dom'

const ShopWrapper = () => {
  return (
    <div className=' flex flex-wrap'>
      {
        SHOPWRAPPER?.map(({name,link,img},inx)=>(
          <NavLink  className='w-[350px] my-7 bg-[#0001] m-auto   flex  ' to={`/shops/${link}`} key={inx} >
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

export default ShopWrapper