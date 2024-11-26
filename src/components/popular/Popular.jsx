import React from 'react'
import data_product from '../assets/data'
import Item from '../items/Item'

const Popular = () => {
  return (
    <>
        <div className="flex flex-col items-center font-['poppins'] gap-2 h-[90vh]">
            <h1 className="text-[#171717] text-[24pt] font-semibold">POPULAR IN WOMEN</h1>
            <hr className="w-48 h-2 rounded-xl bg-[#252525]"/>
            <div className="mt-14 flex gap-8">
                {data_product.map((item, i)=> (
                    <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                ))}
            </div>
        </div>
    </>
  )
}

export default Popular