import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Email = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  // function named validateEmail that takes an argument email
  function validateEmail(email) {
    // Define a regular expression for validating an email - starts with one or more charaacters that can be letters, numbers, periods, underscores, or hyphens, followed by an @ symbol, followed by one or more characters that can be letters, numbers, periods, or hyphens, followed by a period, followed by two to four letters
    const validate = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    // Use the test method to validate the email - string matches the pattern defined by the regex
    return validate.test(email);
  }

  // function named handleSubmit that takes an argument e that designed to handle the submission of a form within a React component
  const handleSubmit = (e) => {
    // Prevent the default behavior of the form submission - stops the form from submitting the tradtional way
    e.preventDefault();

    // The condition checks if the email variable is false or the email variable is not validated by the validateEmail function
    // if either condition is true, set the error state to true - showing error with the form
    if (!email || !validateEmail(email)) {
      setError(true);
      return;
    }

    // if the email variable is validated by the validateEmail function, set the error state to false
    //setEmail resets the email field with an empty string
    //navigates to thank you page
    if (validateEmail(email)) {
      setError(false);
      console.log("Email submitted: ", email);
      setEmail("");
      navigate("/thank-you"); // Navigate to thank you page
    } else {
      setError(true);
    }
  };

  return (
    <div className="flex flex-col mt-4">
      <h3 className="text-sm text-dark-slate-grey font-bold">Email Address</h3>
      {success ? (
        <p className="text-lg text-dark-slate-grey">
          Thank you for subscribing!
        </p>
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
