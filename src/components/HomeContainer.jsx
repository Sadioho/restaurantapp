import React from 'react';
import Delivery from '../img/delivery.png';
import HeroBG from '../img/heroBg.png';
import I1 from '../img/i1.png';
import { heroData } from '../utils/data';

const HomeContainer = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full" id="home">
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
        <div className="flex items-center gap-2 justify-center bg-green-100 px-4 py-1 rounded-full">
          <p className="text-base text-green-500 font-semibold">
            Bike Delivery
          </p>
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img
              src={Delivery}
              className="w-full h-full object-contain"
              alt="delivery"
            />
          </div>
        </div>
        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
          The Fastest Delivery in
          <span className="text-green-600 text-[3rem] lg:text-[5rem]">
            Your City
          </span>
        </p>

        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          quaerat magni dicta eaque aspernatur, vel tempora voluptatum
          laboriosam sapiente consequuntur accusamus! Ab saepe nam dolor
          consectetur voluptate ratione excepturi modi!
        </p>

        <button
          type="button"
          className="bg-gradient-to-br from-green-400 to-green-500 text-white px-4 py-2 md:w-auto rounded-lg w-full hover:shadow-lg transition-all ease-in-out duration-100"
        >
          Order Now
        </button>
      </div>
      <div className=" py-2 flex-1 flex items-center relative">
        <img
          src={HeroBG}
          className="h-420 w-full lg:w-auto lg:h-full ml-auto"
          alt="heroBG"
        />
        <div className="flex-wrap gap-4 lg:gap-4 xl:gap-12 w-full h-full absolute top-0 left-0 lg:px-3 2xl:px-32  md:py-20 py-8 flex items-center justify-center">
          {heroData &&
            heroData.map((elm) => (
              <div
                key={elm.id}
                className="lg:w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg cursor-pointer"
              >
                <img
                  src={elm.imageSrc}
                  alt="i1"
                  className="lg:w-40 w-20 -mt-10 lg:-mt-20"
                />
                <p className="lg:text-xl text-base font-semibold text-textColor mt-2 lg:mt-4">
                  {elm.name}
                </p>
                <p className="text-[12px] lg:text-sm text-lightTextGray font-semibold my-1 lg:my-3">
                  {elm.desc}
                </p>
                <p className="text-sm font-semibold text-headingColor">
                  <span className="text-xs text-red-600">$</span>
                  {elm.price}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
