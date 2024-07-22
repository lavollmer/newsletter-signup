import React from "react";
import { useState } from "react";

const Email = () => {
  return (
    <div className="flex flex-col mt-4">
      <h3 className="text-sm text-dark-slate-grey font-bold">Email Address</h3>
      <form id="form" onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="email@company.com"
            className="mt-1 bg-white border-black text-dark-grey md:text-lg text-md py-2 px-6 rounded-lg w-full focus:border-black"
          />
        </div>
        <button
          type="submit"
          className="bg-dark-slate-grey hover:bg-grey text-white md:text-lg text-md px-4 py-4 rounded"
        >
          Subscribe to monthly newsletter
        </button>
      </form>
    </div>
  );
};

export default Email;
