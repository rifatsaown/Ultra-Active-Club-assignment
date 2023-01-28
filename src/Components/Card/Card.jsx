import React from "react";

const Card = ({ product }) => {
  const { name, time, about, picture } = product;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl ">
        <figure className="">
          <img className="lg:h-[250px] p-4 rounded-3xl " src={picture} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{about}?</p>
          <p className="font-bold pt-3"> Time Requre : {time}s</p>
          <div className="card-actions justify-center">
            <button className="btn lg:btn-wide btn-secondary bg-[#5d5fef]">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
