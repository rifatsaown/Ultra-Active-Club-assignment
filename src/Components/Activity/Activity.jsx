import React from "react";
import Exercise from "../Exercise/Exercise";
import Myinfo from "../Myinfo/Myinfo";

const Activity = ({ product }) => {
  let total = product.reduce((total, prd) => total + prd.time, 0);
  return (
    <div className="p-5">
      <Myinfo />
      <h1 className="text-xl font-bold">Add A Break</h1>
      <Exercise time={total} />
    </div>
  );
};

export default Activity;
