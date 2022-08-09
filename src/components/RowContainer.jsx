import { motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import { MdShoppingBasket } from 'react-icons/md';

const RowContainer = ({ flag, data, scrollValue }) => {
  console.log('🚀 ~ RowContainer ~ data', data);
  const rowContainer = useRef();
  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue]);

  return (
    <div
      ref={rowContainer}
      className={`w-full my-12 flex items-center gap-3 scroll-smooth ${
        flag
          ? 'overflow-x-scroll scrollbar-none '
          : 'overflow-x-hidden flex-wrap'
      }`}
    >
      {data &&
        data.map((item) => (
          <div
            key={item.id}
            className="w-300 h-[225px] min-w-[340px] lg:min-w-[400px] lg:w-340 bg-cardOverlay p-2 rounded-lg my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-between"
          >
            <div className="w-full flex items-center justify-between">
              <motion.img
                whileHover={{ scale: 1.2 }}
                className="w-auto h-[160px] -mt-8 drop-shadow-2xl"
                src={item.imageURL}
                alt=""
              />
              <motion.div
                whileTap={{ scale: 0.75 }}
                className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md"
              >
                <MdShoppingBasket className="text-white" />
              </motion.div>
            </div>
            <div className="w-full flex flex-col items-end justify-end">
              <p className="text-textColor font-semibold text-base lg:text-lg">
                {item.title}
              </p>
              <p className="mt-1 text-sm text-gray-500">{item.category}</p>
              <div className="flex items-center gap-8">
                <div className="text-lg text-headingColor font-semibold">
                  <span className="text-sm text-red-500">$</span> {item.price}
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default RowContainer;
