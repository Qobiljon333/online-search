import React,{useState,useEffect} from 'react'
import { PRODUCTS } from '../../static/static';
import ImgSlide from '../../ui/image slider/ImgSlide';
import {AiFillStar, AiOutlineStar} from "react-icons/ai"
import {NavLink} from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { ADD_TO_CART } from '../../context/action/actionTypes';

const SinglePagePro = ({match}) => {
  const [pro,SetPro ] = useState([])
  const id = match.params.id
  const [mainImg,setMainImg ] = useState("")
  const [proState,setProState] = useState(false)

  const cart = useSelector(s => s.cart)
  const dispatch = useDispatch()

  console.log(proState);

  const checkPro = () => {
    cart.forEach(findPro)

    function findPro (product){
      if(product.__id == id){
        setProState(true)
      }
    }
  }
  

  useEffect(()=>{
    SetPro(PRODUCTS.filter(j=> j.__id === id) )
    checkPro()
  },[])
  // console.log(pro);


 
console.log(cart);
    const addToCartProduct = (product) => {
      let itemIndex = cart.findIndex(item => item.__id === product.__id)
      console.log(itemIndex);
      if( itemIndex < 0 ){
        let newPro = {
          ...product,
          quontity: 1
        }
        dispatch({type:ADD_TO_CART, payload: [...cart, newPro]})
        
      }else{
        let newOrder = cart?.map((item, inx)=> {
          if(inx === itemIndex){
            return {
              ...item,
              quontity: item.quontity + 1
            }

          }else{
            return item
          }
        })
        dispatch({type:ADD_TO_CART, payload: newOrder })
       
      }
      checkPro()
    }



    
  return (
    <div className='w-full flex items-center bg-[#0001]  min-h-[100vh] '>
      {
        pro?.map(({urls,__id,title,desc,price,size, brand,type,color,stars,status,manufactured,data,owner,lifeTime,season,source})=>(
          <div key={__id} className="lg:w-[90%] w-[98%] m-auto flex-wrap flex min-h-[590px] lg:p-12 bg-white my-5 py-3 rounded-md px-2 ">

            <div className="leftt lg:w-[27%] w-full lg:pt-0 pt-2 order-2  lg:order-1 lg:mx-auto  "> 
            <h1 className='text-3xl lg:text-[50px] 2xl:mb-20 leading-normal '>{title}</h1>
            <div className="my-2 lg:my-5  ">  <span className='flex'>
                        {new Array(stars).fill("").map((_, index) => (
                          <AiFillStar key={index} />
                        ))}
                        {new Array(5 - stars).fill("").map((_, index) => (
                          <AiOutlineStar key={index} />
                        ))}
                      </span>
              </div>

              <h2 className='text-2xl text-[green] mb-2 '>{price.brm()} sum</h2>
            <button onClick={()=> {
              addToCartProduct({urls,__id,title,desc,price,size, brand,type,color,stars,status,manufactured,data,owner,lifeTime,season,source})
              setProState(true)
            }} className={`py-3 px-7 bg-[#1F2937] lg:hidden rounded-md  text-white ${proState ? "hidden" : ""}`}>Add to Cart</button>
            <h1 className={`py-3 px-7 bg-[#1F2937] lg:hidden rounded-md  text-white ${proState ? "" : "hidden"}`}>Maxsulot savatchaga qo'shilgan</h1>              
              <h3  className='text-lg mb-2 '><span className='opacity-80 text-base'>Ishlab chiqarilgan vaqt: </span> {manufactured}</h3>
              <h3  className='text-lg mb-2 '><span className='opacity-80 text-base'>Holati: </span> {status}</h3>
              <h3  className='text-lg mb-2 '><span className='opacity-80 text-base'>Kafolat: </span> {lifeTime? lifeTime : "yo'q"}</h3>
              <h3  className='text-lg mb-2 '><span className='opacity-80 text-base'>Maxsulot turi: </span> {type}</h3>
              <h3  className='text-lg mb-2 '><span className='opacity-80 text-base'>Maxsulot joylovchi: </span> <NavLink to={`/single-page-shop/${owner}`}><span className='text-[dodgerblue] ml-1 text-xl '>{owner}</span></NavLink></h3>
              
            </div>


            <div className="w-full centerr max-w-[100%] overflow-x-auto order-1 lg:order-2 lg:w-[40%] mx-auto flex flex-wrap flex-col  justify-between   ">

              <div className="main_img  relative  w-full ">
                <h1 className='absolute bg-black text-white py-1 px-3 top-1 right-1 '>{brand}</h1>
                <img className='w-full lg:h-[420px] h-[290px] object-contain ' src={mainImg ? mainImg : urls[0]} alt="" />
              </div>
              <div  className="imgs flex items-center h-[65px] lg:h-[75px] lg:max-w-full w-full    overflow-y-hidden overflow-x-auto ">
                {
                  urls?.map((img,inx)=>(
                    <div onClick={()=> setMainImg(img)}  key={inx} className="img hover:bg-[#2E293F] p-1 h-[65px] min-w-[60px] transitionn mx-2"><img className='h-[55px] w-[55px] object-contain' src={img} alt="" /></div>
                  ))
                }
               
                
              </div>

           
            </div>
                                    
            
            <div className="rightt  w-full lg:w-[27%] order-3 lg:order-3 lg:mx-auto flex flex-wrap flex-col  justify-between    ">
            
            <div className=" w-full ">
            <button onClick={()=> {
              addToCartProduct({urls,__id,title,desc,price,size, brand,type,color,stars,status,manufactured,data,owner,lifeTime,season,source})
              setProState(true)
            }} className={`py-3 px-7 bg-[#1F2937] rounded-md hidden text-xl  text-white ${proState ? "lg:hidden" : "lg:block  "}`}>Add to Cart</button>
            <h1 className={`py-3 px-7 bg-[#1F2937] hidden lg:block  rounded-md  text-white ${proState ? "lg:block" : "lg:hidden"}`}>Maxsulot savatchaga qo'shilgan</h1>              
           
            <p className='text-lg mb-2 '>
                <span className='opacity-80 text-base'>{size? "O'lcham: " : ""}</span> {size? size :""}
             </p>
             <p className='text-lg mb-2  '>
                <span className='opacity-80 text-base'>{source? "Tarkibi: " : ""}</span> {source? source :""}
             </p>
             <p className='text-lg  mb-2 '>
                <span className='opacity-80 text-base'>{color? "Rangi: " : ""}</span> {color? color :""}
             </p>
             <p className='text-lg mb-2  '>
                <span className='opacity-80 text-base'>{season? "Fasl: " : ""}</span> {season? season :""}
             </p>
             <p className='text-lg mb-2 '>
                <span className='opacity-80 text-base'>{desc? "Qo'shimcha malumotlar: " : ""}</span> {desc? desc :""}
             </p>


            </div>
            <div className="flex justify-between"><span className='opacity-80 text-base'>Maxsulot joylangan sana: </span> <h1>{data}</h1></div>
           
            </div>

          </div>
        ))
      }
    </div>
  )
}

export default SinglePagePro