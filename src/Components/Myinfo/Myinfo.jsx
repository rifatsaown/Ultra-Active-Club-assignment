import React from "react";
import { CiLocationOn } from "react-icons/ci";
const Myinfo = () => {
  return (
    <div>
      <div className="flex items-center">
        <img
          className="rounded-full w-2/12 xl:w-3/12"
          src="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/300166522_3366391373642404_4067215810698262304_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=8JAheM8twZwAX8CkzCI&_nc_ht=scontent.fdac14-1.fna&oh=00_AfBl7aLzSDksD2VMAHYdIsk2IiIZdVTDTDWXdobxIldB5Q&oe=63DB1502"
          alt=""
        />
        <div className="ml-2">
          <h1 className="font-bold">Md Rifat Hossen Saown</h1>
          <p className="text-gray-400 flex mt-2">
            {" "}
            <CiLocationOn className="text-2xl mr-1" /> Uttara , Dhaka
          </p>
        </div>
      </div>

      <div className="flex justify-around my-9 bg-[#f2f4fa] rounded-xl px-5 py-3">
        <div>
          <h1>
            <span className="font-bold text-2xl">68</span>
            <small>kg</small>
          </h1>
          <p>Weight</p>
        </div>
        <div>
          <h1>
            <span className="font-bold text-2xl">5.7</span>
          </h1>
          <p>Height</p>
        </div>
        <div>
          <h1>
            <span className="font-bold text-2xl">22</span>
            <small>yrs</small>
          </h1>
          <p>Age</p>
        </div>
      </div>
    </div>
  );
};

export default Myinfo;
