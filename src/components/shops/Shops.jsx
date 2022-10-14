import React, { useEffect, useState } from 'react'
import s from "./Shops.module.css"
import {SHOPS} from "../../static/static"
import { NavLink } from 'react-router-dom'

const Shops = ({match}) => {
  const [data ,setData ] = useState([])
  const type = match.params.type
  // console.log(data);

  useEffect(()=>{
    setData(SHOPS.filter(j => j.types.includes(type)))
  },[])
  return (
    <div>
      {
        data.length ? 
        <div className="flex flex-wrap ">
        {
          data?.map(({userName,name,mainImg,location,__id})=>(
            <NavLink className={`max-w-[350px]   max-h-[450px] mt-6 mx-auto lg:mx-5 bg-[#e4e4e4]`} key={__id} to={`/single-page-shop/${userName}`}>
              <div className="p-3 ">
                <img src={mainImg} alt={`${name} img`} />
                <h1>{name}</h1>
                <p>{location}</p>
              </div>
            </NavLink>
          ))
        }
      </div>
        :
      <h1 className='text-center  my-6'>Bu turdagi Savdo Markazlari Topilmadi ! ! !</h1>
      }
    </div>
  )
}

export default Shops