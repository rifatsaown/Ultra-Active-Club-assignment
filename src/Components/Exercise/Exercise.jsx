import React from "react";

const Exercise = () => {
  return (
    <div>
      <div className="flex justify-around bg-[#f2f4fa] mt-5 py-3 px-2 text-center rounded-xl">
        <button className="bg-white hover:bg-[#5d5fef] font-semibold hover:text-white rounded-full p-3">
          10s
        </button>
        <button className="bg-white hover:bg-[#5d5fef] font-semibold hover:text-white rounded-full p-3">
          20s
        </button>
        <button className="bg-white hover:bg-[#5d5fef] font-semibold hover:text-white rounded-full p-3">
          30s
        </button>
        <button className="bg-white hover:bg-[#5d5fef] font-semibold hover:text-white rounded-full p-3">
          40s
        </button>
      </div>
      <div className="mt-7">
        <h1 className="text-xl font-bold ">Exercise Details</h1>
        <div className="flex items-center justify-between bg-[#f2f4fa] mt-3 rounded-xl px-3 py-1">
          <p className="text-lg font-bold">Exercise Time </p>
          <input
            type="text"
            placeholder="Second"
            className="input input-ghost w-1/2 max-w-xs"
          />
        </div>
        <div className="flex items-center justify-between bg-[#f2f4fa] mt-3 rounded-xl px-3 py-1">
          <p className="text-lg font-bold">Break Time </p>
          <input
            type="text"
            placeholder="Second"
            className="input input-ghost w-1/2 max-w-xs"
          />
        </div>
      </div>
      <div className="my-9">
        <button className="btn lg:btn-wide btn-secondary bg-[#5d5fef]">
          Activity Compleate
        </button>
      </div>
    </div>
  );
};

export default Exercise;
