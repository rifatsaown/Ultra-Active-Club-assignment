import React from "react";
import toast, { Toaster } from 'react-hot-toast';

const Card = ({ product , handleAddTime}) => {
  const { name, time, about, picture } = product;
  const handleAdd = () => {
    handleAddTime(product)
    toast.success('Time Added')
  }
  return (
    <div>
      <div className="card bg-base-100 shadow-xl ">
        <figure className="">
          <img className="lg:h-[250px] p-4 rounded-3xl " src={picture} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{about}?</p>
          <p className="font-bold pt-3"> Time Requre : {time}</p>
          <div className="card-actions justify-center">
            <button onClick={handleAdd} className="btn lg:btn-wide btn-secondary bg-[#5d5fef]">Add Time</button>
            <Toaster/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
