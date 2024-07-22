import React from "react";
import { useState } from "react";

const Email = () => {
  //manage submission status
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  //event handler for submission
  const handleSubmit = (e) => {
    //prevent default form submission
    e.preventDefault();
    //log to console
    console.log("Submitted");
    //update state status to true
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col mt-4">
      <h3 className="text-sm text-dark-slate-grey font-bold">Email Address</h3>
      <form id="form" noValidate>
        <div>
          <input
            type="email"
            placeholder="email@company.com"
            className="mt-1 bg-white border-black text-dark-grey md:text-lg text-md py-2 px-6 rounded-lg w-full focus:border-black"
          />
        </div>
        <button
          className="bg-dark-slate-grey hover:bg-grey text-white md:text-lg text-md px-4 py-4 rounded"
          type="submit"
          onClick={handleSubmit}
        >
          Subscribe to monthly newsletter
        </button>
      </form>
      {/* display message when submitted */}
      {submitted && (
        <p className="text-sm text-dark-slate-grey mt-2 font-bold">
          Thank you for subscribing!
        </p>
      )}
    </div>
  );
};

export default Email;
