import React, { useEffect, useState } from 'react'
import s from "./SinglePage.module.css"
import { SHOPS } from '../../static/static'

import {MdLocationPin,MdContactPage, MdPhoneInTalk } from "react-icons/md"
import {BsTelegram } from "react-icons/bs"
import {SiGmail } from "react-icons/si"
import {IoIosArrowDropdownCircle, IoIosArrowDroprightCircle} from "react-icons/io"
import ImgSlide from '../../ui/image slider/ImgSlide'

const SinglePageShop = ({match}) => {
  const [shop,setShop]= useState([])
  const [seeMore,setSeeMore] = useState(false)
  const userName = match.params.userName
  
  console.log(shop.length);

  function getProduct (){
    setShop(SHOPS.filter(j => j.userName === userName ))
  }
  
  useEffect(()=>{
    getProduct()
    // refreshh()
    
  },[userName])
  console.log(userName);
   
  const refreshh = ()=>{
    if(shop.length === 0){
      window.location.reload()

    }
  }

  console.log(shop);

 
   
 
  return (
    <div className='bg-[#0001] min-h-[100vh]'>
      {
        shop.length ? <div className="">
          {
            shop?.map(({__id,userName,name,mainImg,imgs,desc,location,types,contact})=>(
              <div key={__id} className=" ">
                <div className="mainImg w-full flex items-center h-[100px] lg:h-[200px] overflow-hidden ">
                  <img className=' w-full ' src={mainImg} alt="" />
                </div>

                <h1 className=' text-center font-medium py-2 bg-[#0002] text-black '>{name}</h1>

                

                <div className=" lg:w-[85%]  m-auto">

                <div className="location py-2 flex items-center"><MdLocationPin/> <h1>{location}</h1> </div>
                <div className="location py-2 flex items-center"><MdContactPage/>
                 { 
                    contact?.map(({phone,phone2,telegram,gmail},inx)=>(
                      <div key={inx} className="flex flex-wrap pl-3 lg:flex-nowrap items-center  "><div className="w-full lg:w-1/2 lg:mb-0 ml-3 items-center mb-2  flex "> <MdPhoneInTalk  /><p className="ml-1">{phone}</p> <MdPhoneInTalk className='ml-3'/> <p className="ml-1">{phone2}</p></div>  <div className="w-full lg:w-1/2 flex items-center  flex-wrap lg:flex-nowrap "> <div className="flex items-center  mb-2 lg:mb-0 "><BsTelegram className='ml-3 text-sky-500'/> <p className="ml-1">{telegram}</p></div>  <div className="flex items-center"><SiGmail className='ml-3' /> <p className="ml-1">{gmail}</p></div></div>  </div>
                    ))
                 }
                 </div>
                 <div className="extraInfoContainer borderr2  transitionn">
                     <div  onClick={()=>setSeeMore(j=> !j)} className="w-full   hover:cursor-pointer  flex "> <button className={`text-center ${seeMore ? "opacity-0 ":""}`} >Ko'proq ma`lumotlar...</button>  </div>
                     <div className={`${seeMore? "max-h-max":"max-h-0"} transitionn overflow-hidden`}>
                      <p className='text-[13px] mb-3 ml-1 opacity-90'>{desc}</p>
                      <p className='ml-1'>
                        Maxsulot turlari:
                      </p>
                      <div className="types lg:mb-3 flex max-w-full lg:justify-around lg:p-2  overflow-x-auto  p-3">
                        {
                          types?.map((t,inx)=>(
                            <div key={inx} className="py-2 lg:py-1 px-7 mx-1 rounded-sm  bg-black "><h1 className='text-white min-w-max tracking-[.17rem]'>{t}</h1></div>
                          ))
                        }
                      </div>

                        <ImgSlide imgs={imgs} />
                     </div>
                     <IoIosArrowDropdownCircle  onClick={()=>setSeeMore(j=> !j)}  className={`text-center hover:cursor-pointer block my-1 transitionn m-auto ${seeMore? "rotate-180":""}`} />
                 </div>


                  <h1 className=' text-4xl' >Products:</h1>

                </div>

              </div>
            ))
          }
        </div>
          :
        <div className=" w-full h-[100vh] flex items-center justify-center ">
          <button className='px-16 text-xl lg:text-3xl  text-white py-4 bg-[dodgerblue]' onClick={()=> refreshh()}>Refresh</button>
        </div>
      }

    </div>
  )
}

export default SinglePageShop       