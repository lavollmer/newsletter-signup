import React from "react";

const Email = () => {
  return (
    <div className="flex flex-col justify-start mt-1">
      <h3 className="text-sm text-dark-slate-grey">Email Address</h3>
      <div className="b-black">
        <input
          type="email"
          placeholder="Enter your email"
          className="bg-white border-black text-dark-slate-grey md:text-lg text-md py-2 px-6 rounded-lg w-full"
        />
      </div>
    </div>
  );
};

export default Email;
