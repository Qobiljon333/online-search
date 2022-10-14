import React,{useEffect,useState} from 'react'
import s from "./Products.module.css"
import {PRODUCTS} from "../../static/static"
import { NavLink } from 'react-router-dom'

const Products = ({match}) => {
  const [products,setProducts] = useState([])
  const type = match.params.type
  console.log(type);

  useEffect(()=>{
    setProducts(PRODUCTS.filter(j=> j.type === type))
  },[])
  console.log(products);
  return (
    <div className=''>
      {
        products.length? 
        <div className="flex flex-wrap w-full min-h-[100vh]">
            {
              products.map(({__id,title,price,brand,urls})=>(
                <NavLink className={`lg:w-1/5 bg-[#0001] mx-auto  my-2  w-[170px] lg:h-[270px] h-[200px]`} key={__id} to={`/single-page-pro/${__id}`} >
                  <div className="py-1  px-2">
                    <img className='w-full lg:h-[200px] lg:max-h-[200px] max-h-[140px] object-contain  ' src={urls[0]} alt={`${title} image`} />
                    <div className=""><h1 className='text-lg'>{title}</h1> <p><span className='text-[green]'>{price.brm()} </span> sum </p></div>
                  </div>
                </NavLink>
              ))
            }
        </div>
            :
        <div className="flex items-center h-[90vh] justify-center">
          <h1 className='text-xl'>Hozirda bu turdagi maxsulotlar yo'q ...</h1>
        </div>
      }
    </div>
  )
}
 
export default Products