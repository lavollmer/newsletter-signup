import React from "react";
import { useState } from "react";

const Email = () => {
  const [error, setError] = useState(false);
  const validate = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
      onSuccess(true);
      setEmail("");
    }
  };

  return (
    <div className="flex flex-col mt-4">
      <h3 className="text-sm text-dark-slate-grey font-bold">Email Address</h3>
      <form
        id="form"
        className="flex flex-col relative"
        onSubmit={handleSubmit}
      >
        <p
          className={`${
            error
              ? "text-custom-size-12 font-bold mb-2 absolute right-0"
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
        <button>Subscribe to monthly newsletter</button>
      </form>
    </div>
  );
};

export default Email;
