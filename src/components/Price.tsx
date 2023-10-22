"use client"
import React,{useState,useEffect} from 'react'
import { types } from 'util'

type Props={
    price:number,
    id:number,
    options?:{title:string,additionalPrice:number}[]
}
const Price = ({ price, id, options } : Props) => {
  const [total,setTotal]= useState(price);
  const [quantity,setQuantity]= useState(1);
  const [selected,setSelected]= useState(0);

  useEffect(() => {
    setTotal(
      quantity * (options? price + options [selected].additionalPrice: price)
    )
  }, [quantity,selected,options,price])
  

  return (
    <div className='flex flex-col gap-4'>
        <h2 className='text-2xl font-bold'>${total.toFixed(2)}</h2>

        <div className='flex gap-4'>
          {options?.map((option,index)=>(
            <button key={option.title} 
            className='min-w-[6rem] p-2 ring-1 ring-red-400 rounded-md'
            style={{
              background:selected=== index?"rgb(248 113 113)": "white",
              color:selected=== index?"white": "red"

            }}
            onClick={()=>setSelected(index)}
            >
              {option.title}
              </button>
          ))}

        </div>
        <div className='flex justify-between items-center'>
          <div className='flex justify-between items-center w-full p-4 ring-1 ring-red-500 rounded-md '>
            <span>Quantity</span>
            <div className='flex items-center gap-4'>
              <button onClick={()=>setQuantity(prev=>(prev>1? prev-1:1))}>{'<'}</button>
              <span>{quantity}</span>
              <button onClick={()=>setQuantity(prev=>(prev<9? prev+1:9))}>{'>'}</button>
            </div>
          </div>

          <button className='uppercase w-56 bg-red-500 text-white p-4 ring-1 ring-red-500 rounded-md'>Add To Cart</button>

        </div>
        
        </div>
  )
}

export default Price