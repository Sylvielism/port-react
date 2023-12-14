import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


const Capabilities = () => {
  return (
    <div className='max-w-[1000px] m-auto'>
        <div className='max-w-[1000px] m-auto h-24 items flex items-center p-4'>
            <h1 className='text-3xl text-white align-middle font-bold underline underline-offset-8 decoration-4'>Capabilities</h1>
        </div>
        
        
        <Swiper
        spaceBetween={25}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide><div className='text-white bg-neutral-700 rounded-md p-4 border border-gray-500'>Html</div></SwiperSlide>
            <SwiperSlide><div className='text-white bg-neutral-700 rounded-md p-4 border border-gray-500'>CSS</div></SwiperSlide>
            <SwiperSlide><div className='text-white bg-neutral-700 rounded-md p-4 border border-gray-500'>JavaScript</div></SwiperSlide>
            <SwiperSlide><div className='text-white bg-neutral-700 rounded-md p-4 border border-gray-500'>React.js</div></SwiperSlide>
            <SwiperSlide><div className='text-white bg-neutral-700 rounded-md p-4 border border-gray-500'>Next.js</div></SwiperSlide>
            <SwiperSlide><div className='text-white bg-neutral-700 rounded-md p-4 border border-gray-500'>Node.js</div></SwiperSlide>
            <SwiperSlide><div className='text-white bg-neutral-700 rounded-md p-4 border border-gray-500'>Mongodb</div></SwiperSlide>
            <SwiperSlide><div className='text-white bg-neutral-700 rounded-md p-4 border border-gray-500'>Python</div></SwiperSlide>
            <SwiperSlide><div className='text-white bg-neutral-700 rounded-md p-4 border border-gray-500'>TailwindCSS</div></SwiperSlide>
        </Swiper>

    </div>
  )
}

export default Capabilities