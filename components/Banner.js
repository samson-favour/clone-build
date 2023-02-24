import Image from 'next/image'
import React from 'react'

const Banner = () => {
    return (
      <div className="banner  relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
        <Image
          src="https://ogle.ng/wp-content/uploads/2021/04/19.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="left"
        />
        <div className=" z-20 absolute top-1/2 w-full text-center">
          <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
          <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full cursor-pointer font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
            I'm flexible
          </button>
        </div>
      </div>
    );
}

export default Banner
