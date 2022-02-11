import React, { useState } from "react";

type Props = {
  color?: string;
};

export const Header = (pros: Props) => {
  const [number, setNumber] = useState(5);

  const click = () => {
    setNumber((prevState) => {
      return prevState + 1;
    });
  };

  return (
    <div>
      {number}
      <br />
      <button onClick={() => click()}>Click me</button>
    </div>
  );
};
