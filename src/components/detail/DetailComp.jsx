import React from "react";

const DetailComp = ({ productDetail }) => {


  
  return (
    <div className="flex gap-10 my-10">
      <img
        className="w-[700px] h-[500px] object-cover "
        src={productDetail?.image}
        alt=""
      />
      <div className="">
        <div className="text-4xl font-bold"> {productDetail?.title}</div>
        <div className="my-2 text-2xl"> {productDetail?.description}</div>
        <div className="my-2 text-xl text-red-500">
          Rating: {productDetail?.rating?.rate}
        </div>
        <div className="my-2 text-xl text-red-500">
          Count: {productDetail?.rating?.count}
        </div>
        <div className="text-5xl font-bold">
          {productDetail?.price} <span className="text-sm">TL</span>
        </div>
        <div className="flex items-center gap-5 my-4">
          <div className="text-5xl cursor-pointer">-</div>
          <input
            className="w-5 text-center text-4xl font-bold"
            type="text"
            value="0"
          />
          <div className="text-4xl cursor-pointer">+</div>
        </div>
        <div className="my-4 border w-[200px] text-2xl rounded-md bg-gray-200 cursor-pointer h-16 flex items-center justify-center">
          Add to basket
        </div>
      </div>
    </div>
  );
};

export default DetailComp;