import React from "react";
import iconSuccess from "../assets/icon-success.svg";

const ThankYou = () => {
  return (
    <div>
      <div>
        <img src={iconSuccess} alt="Success icon" />
        <h1 className="font-bold text-3xl">Thanks for subscribing!</h1>
        <p>
          A confirmation email has been set. Please open it and click the button
          inside to confirm your subscription.
        </p>
        <button className="text-white bg-charcoal-grey rounded-lg px-10 py-2 cursor-pointer hover:bg-tomato">Dismiss message</button>
      </div>
    </div>
  );
};

export default ThankYou;
