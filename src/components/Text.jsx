import React from "react";
import iconList from "../assets/icon-list.svg";

const Text = () => {
  return (
    <div className="flex flex-col">
      <div>
        <h2>Join 60,000+ product managers receiving monthly updated on:</h2>
      </div>
      <div className="space-y-2">
        <ul className="flex flex-row">
          <img src={iconList} alt="icon list" />
          <li className="ml-2">Product discovery and building what matters</li>
        </ul>
        <ul className="flex flex-row">
          <img src={iconList} alt="icon list" />
          <li className="ml-2">Measuring to ensure updates are a success</li>
        </ul>
        <ul className="flex flex-row">
          <img src={iconList} alt="icon list" />
          <li className="ml-2">And much more!</li>
        </ul>
      </div>
    </div>
  );
};

export default Text;
