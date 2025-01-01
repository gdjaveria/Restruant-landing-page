import React from "react";
import Dash from "../dash";
import Image from "next/image";

 function Feature (){
    return(
        <div className="container pt-20 sm:pt-40 ">
            <h2 className="text-6xl font-bold px-8">Our</h2>
            <h2 className="text-6xl font-bold px-8">
                Featured <span className="text-accent"> Food </span>
            </h2>

<p className="max-w-[300px] pt-10 px-10 py-10 font-medium text-gray-700">
Indulge in flavors that make every bite unforgettable From our kitchen 
to your heart savor the love in every dish Because great food is
 more than a meal—its a moment of joy
</p>

<Dash/>

<div className="grid md:grid-cols-[1fr,37%,1fr] gap-16 px-10 py-10 mt-20">
 <div className="w-fit mx-auto self-end hover:translate-y-10 hover:cursor-pointer duration-[0.3s] ease-linear hover:shadow-2xl shadow-gray-950">
 
 <Image className="w-[100%] mx-w-[400px] sm:max-w-full h-auto shadow-2xl"
  src="/stock0.jpg"
 width={300} 
 height={600} 
 alt="grid image"/>

<div className="space-y-4">
    <Dash />
    <h2 className="font-medium text-xl px-3 capitalize "> Green Salad </h2>
    <p className="text-gray-700 font-medium text-[14px] xl:text-[16px] px-3 py-3">
    Fresh crisp and bursting with vibrant flavors Our 
    green salad brings natures best to your plate
    </p>
</div>
</div>


<div className="w-fit mx-auto rounded-xl hover:translate-y-[-40px] duration-[0.2s]
 ease-linear  hover:cursor-pointer  hover:shadow-2xl shadow-gray-950">

 <Image className="w-[100%] rounded-xl mx-w-[400px] sm:max-w-full h-auto shadow-2xl"
  src="/stoc001.jpg"
 width={500} height={900} 
 alt="image"/>

<div className="space-y-4">
    <Dash />
    <h2 className="font-medium px-3 text-xl "> Pan cakes </h2>
    <p className="text-gray-700 font-medium text-[14px] px-3 py-3  xl:text-[16px]">
    Fluffy golden pancakes stacked high and dripping with syrup
    Each bite is a sweet melt in your mouth delight
    </p>
</div>
</div>


<div className="w-fit rounded-xl mx-auto self-end hover:translate-y-10 hover:cursor-pointer duration-[0.3s] 
ease-linear hover:shadow-2xl shadow-gray-950">
 <Image className="w-[100%] mx-w-[400px] sm:max-w-full h-auto shadow-2xl"
  src="/img999.jpg"
 width={300} height={600} 
 alt="grid image"/>

<div className="space-y-4">
    <Dash />
    <h2 className="font-medium text-xl px-3 ">Grilled Chicken </h2>
    <p className="text-gray-700 font-medium text-[14px] xl:text-[16px]">
    Juicy tender grilled chicken with a perfect smoky char
    Every bite packs a punch of savory flavor and satisfaction
    </p>
</div>
</div>
</div>
</div>

  )
 }
 export default Feature;