import React, { ReactElement, useState } from "react";

export const TestInput = (): ReactElement => {
  const [number, setNumber] = useState<number>(5);

  return (
    <>
      <input
        value={number}
        onChange={(e) => {
          setNumber(+e.target.value);
        }}
      />
    </>
  );
};
