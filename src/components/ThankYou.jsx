import React from "react";
import iconSuccess from "../assets/icon-success.svg";
import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div
      id="bg-container"
      className="mt-10 md:text-charcoal-grey text-dark-slate-grey md:bg-charcoal-grey font-roboto bg-white"
    >
      <div className="bg-white rounded-lg">
        <div className="flex flex-col p-4 md:m-10 ">
          <img
            src={iconSuccess}
            alt="Success icon"
            className="h-20 w-20 md:ml-10"
          />
          <h1 className="font-bold text-2xl mt-6 md:text-6xl md:p-10">Thanks for subscribing!</h1>
          <p className="flex flex-col mt-6 md:p-10">
            A confirmation email has been sent. Please open it and click the
            button inside to confirm your subscription.
          </p>
          {/* Dismiss message button that will navigate to the home page when clicked */}
          <div className="flex flex-col mt-8 md:mt-40">
            <button
              onClick={() => navigate("/")}
              className="text-white bg-charcoal-grey rounded-lg px-4 md:px-10 py-4 cursor-pointer hover:bg-tomato"
            >
              Dismiss message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
