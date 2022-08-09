/* eslint-disable jsx-a11y/img-redundant-alt */
import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { MdShoppingBasket } from 'react-icons/md';
import { actionType } from '../context/reducer';
import { useStateValue } from '../context/StateProvider';
import NotFound from '../img/NotFound.svg';
const RowContainer = ({ flag, data, scrollValue }) => {
  const rowContainer = useRef();
  const [items, setItems] = useState([]);
  const [{ cartItems }, dispatch] = useStateValue();

  const addToCart = () => {
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: items,
    });
    localStorage.setItem('cartItems', JSON.stringify(items));
  };

  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue]);
  useEffect(() => {
    addToCart();
  }, [items]);
  return (
    <div
      ref={rowContainer}
      className={`w-full my-12 flex items-center  gap-3 scroll-smooth ${
        flag
          ? 'overflow-x-scroll scrollbar-none'
          : 'overflow-x-hidden flex-wrap justify-center'
      }`}
    >
      {data && data.length > 0 ? (
        data.map((item) => (
          <div
            key={item.id}
            className="w-275 h-[225px] min-w-[275px] lg:min-w-[300px] lg:w-340 bg-cardOverlay p-2 rounded-lg my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-between"
          >
            <div className="w-full flex items-center justify-between">
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="w-40 -mt-8 h-40 drop-shadow-2xl"
              >
                <img
                  src={item.imageURL}
                  alt="image"
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <motion.div
                onClick={() => setItems([...cartItems, item])}
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
        ))
      ) : (
        <div className="w-full flex flex-col items-center justify-center">
          <img src={NotFound} alt="not found" className="h-340" />
          <p className="text-xl text-headingColor font-semibold my-2">
            Items Not Available
          </p>
        </div>
      )}
    </div>
  );
};

export default RowContainer;
