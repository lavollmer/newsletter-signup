import React from "react";
import iconSuccess from "../assets/icon-success.svg";
import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div
      id="bg-container"
      className="text-dark-slate-grey font-roboto bg-white"
    >
      <div className="flex flex-col m-10">
        <img src={iconSuccess} alt="Success icon" className="h-20 w-20 ml-10" />
        <h1 className="font-bold text-6xl p-10">Thanks for subscribing!</h1>
        <p className="p-10">
          A confirmation email has been set. Please open it and click the button
          inside to confirm your subscription.
        </p>
        <div className="flex flex-col mt-40">
          <button
            onClick={() => navigate("/")}
            className="text-white bg-charcoal-grey rounded-lg px-10 py-4 cursor-pointer hover:bg-tomato"
          >
            Dismiss message
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
