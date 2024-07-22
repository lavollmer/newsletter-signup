import React from "react";
import { useState } from "react";

const Email = () => {
  const [error, setError] = useState(false);
  const validate = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  function validateEmail(email) {
    return validate.test(email);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !validateEmail(email)) {
      setError(true);
      return;
    }

    if (validateEmail(email)) {
      setError(false);
      console.log("Email submitted: ", email);
      setEmail("");
      setSuccess(true);
    }
  };

  return (
    <div className="flex flex-col mt-4">
      <h3 className="text-sm text-dark-slate-grey font-bold">Email Address</h3>
      {success ? ( // Step 3: Conditionally render the thank you message
        <p className="text-lg text-dark-slate-grey">Thank you for subscribing!</p>
      ) : (
        <form
          id="form"
          className="flex flex-col relative"
          onSubmit={handleSubmit}
        >
          <p
            className={`${
              error
                ? "text-md font-bold absolute right-0 cursor-pointer text-tomato"
                : "hidden"
            }`}
          >
            Valid email required
          </p>
          <input
            type="text"
            name="email"
            id="email"
            className={`${
              error
                ? "px-6 py-4 border-2 rounded-lg border-custom-vermellion text-custom-vermellion placeholder-custom-vermellion mb-6 bg-custom-vermellion-15 cursor-pointer"
                : "px-6 py-4 border-2 rounded-lg border-custom-gray mb-6 cursor-pointer hover:border-custom-dark-navy"
            }`}
            placeholder="email@company.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) {
                setError(false);
              }
            }}
          />
          <button className="text-white bg-charcoal-grey rounded-lg px-10 py-2 cursor-pointer hover:bg-tomato">
            Subscribe to monthly newsletter
          </button>
        </form>
      )}
    </div>
  );
};

export default Email;
