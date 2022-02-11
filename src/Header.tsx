import React, { useEffect, useState } from "react";

type Props = {
  color?: string;
};

export const Header = (pros: Props) => {
  const [number, setNumber] = useState(5);
  const [number2, setNumber2] = useState(number * 2);

  useEffect(() => {
    setNumber2(number * 2);
  }, [number]);

  const click = () => {
    setNumber((prevState) => {
      return prevState + 1;
    });
  };

  return (
    <div>
      {number}
      <br />
      {number2}
      <br />
      <button onClick={() => click()}>Click me</button>
    </div>
  );
};
