import React from "react";

const Exercise = ({ time}) => {
  const getFromLocalStorage = () => {
    const breakTime = localStorage.getItem("breakTime");
    if(breakTime) return breakTime;
    return 0;
  }
  const [totalBreakTime, setTotalBreakTime] = React.useState(getFromLocalStorage());

  const addToLocalStorage = (time) => {
    localStorage.setItem("breakTime", time);
  }
  

  
  const break1 = () => {
    setTotalBreakTime(10);
    addToLocalStorage(10);
  };
  const break2 = () => {
    setTotalBreakTime(20);
    addToLocalStorage(20);
  };
  const break3 = () => {
    setTotalBreakTime(30);
    addToLocalStorage(30);
  };
  const break4 = () => {
    setTotalBreakTime(40);
    addToLocalStorage(40);
  };


  
  return (
    <div>
      <div className="flex justify-around bg-[#f2f4fa] mt-5 py-3 px-2 text-center rounded-xl">
        <button onClick={break1} className="bg-white hover:bg-[#5d5fef] font-semibold hover:text-white rounded-full p-3">
          10s
        </button>
        <button onClick={break2} className="bg-white hover:bg-[#5d5fef] font-semibold hover:text-white rounded-full p-3">
          20s
        </button>
        <button onClick={break3} className="bg-white hover:bg-[#5d5fef] font-semibold hover:text-white rounded-full p-3">
          30s
        </button>
        <button onClick={break4} className="bg-white hover:bg-[#5d5fef] font-semibold hover:text-white rounded-full p-3">
          40s
        </button>
      </div>
      <div className="mt-7">
        <h1 className="text-xl font-bold ">Exercise Details</h1>
        <div className="flex items-center justify-between bg-[#f2f4fa] mt-3 rounded-xl px-3 py-3">
          <p className="text-lg font-bold">Exercise Time </p>
          <p>
            {time} <span className="text-gray-500">Second</span>
          </p>
        </div>
        <div className="flex items-center justify-between bg-[#f2f4fa] mt-3 rounded-xl px-3 py-3">
          <p className="text-lg font-bold">Break Time </p>
          <p>
            {totalBreakTime} <span className="text-gray-500">Second</span>
          </p>
        </div>
      </div>
      <div className="my-9">
        <button
          className="btn lg:btn-wide btn-secondary bg-[#5d5fef]"
        >
          Activity Compleate
        </button>
      </div>
    </div>
  );
};

export default Exercise;
