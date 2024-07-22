import React from "react";
import iconList from "../assets/icon-list.svg";

const Text = () => {
  return (
    <div>
      <div>
        <h2>Join 60,000+ product managers receiving monthly updated on:</h2>
      </div>
      <div>
        <ul>
          <img src={iconList} alt="icon list">
            <li>Product discovery and building what matters</li>
          </img>
        </ul>
      </div>
    </div>
  );
};

export default Text;
