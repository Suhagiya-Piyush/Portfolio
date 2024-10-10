import React from "react";
import kotak from "../assets/kotak.png";
import axis from "../assets/axis.png";

const Experiance = () => {
  return (
    <>
      <div name='Experiance' className="max-w-screen-2xl container mx-auto px-4 md:px-10 my-10">
        <h2 className="text-3xl font-bold mb-5">Experiance</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 space-y-4 md:space-y-0">
          <div className="">
            <img
              src={kotak}
              className="w-full h-[120px] md:h-[100px] md:w-[40%] object-cover rounded-md border-[2px]"
              alt=""
            />
            <h2 className="text-xl font-bold my-2">Kotak Mahindra Bank</h2>
            <p className="text-lg font-semibold ps-2">
              Sales Excutive{" "}
              <span className="text-xs text-gray-500">(CASA)</span>
            </p>
            <p className="mt-1 ps-2">
              Duration :{" "}
              <span className="text-gray-600 font-semibold">2018-2021</span>
            </p>
          </div>
          <div className="">
            <img
              src={axis}
              className="w-full h-[120px] md:h-[100px] md:w-[40%] rounded-md border-[2px]"
              alt=""
            />
            <h2 className="text-xl font-bold my-2">Axis Bank LTD.</h2>
            <p className="text-lg font-semibold ps-2">
              Sales Excutive{" "}
              <span className="text-xs text-gray-500">(Home Loan)</span>
            </p>
            <p className="mt-1 ps-2">
              Duration :{" "}
              <span className="text-gray-600 font-semibold">2021-Running...</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experiance;
