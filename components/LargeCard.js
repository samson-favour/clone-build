import Image from "next/image";
import React from "react";
import DateRanpicker from './DateRanpicker'

const LargeCard = ({ img, title, description, buttonText }) => {
  return (
    <section className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={img}
          layout="fill"
          className="rounded-2xl"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="absolute top-32 left-12">
        <h3 className="text-4xl mb-3 w-64">{title}</h3>
        <p className="">{description}</p>

        <button className="text-sm text-white bg-[#3270FC] px-4 py-2 mt-5 rounded-lg  hover:shadow-xl active:scale-90 transition duration-150">
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default LargeCard;
