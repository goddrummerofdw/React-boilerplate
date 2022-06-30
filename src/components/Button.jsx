import React from "react";

const Button = () => {
  const btn = () => {
    console.log("test");
  };
  return (
    <div>
      <button onClick={btn}>Click</button>
    </div>
  );
};

export default Button;
