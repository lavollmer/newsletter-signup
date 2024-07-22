import React from "react";

const Email = () => {
  return (
    <div className="flex flex-col justify-start">
      <h3 className="text-sm text-dark-slate-grey font-bold">Email Address</h3>
      <div>
        <input
          type="email"
          placeholder="email@company.com"
          className="mt-1 bg-white border-black text-dark-grey md:text-lg text-md py-2 px-6 rounded-lg w-full"
        />
      </div>
    </div>
  );
};

export default Email;
