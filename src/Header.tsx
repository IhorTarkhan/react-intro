import React from "react";

type Props = {
  color?: string;
};

export const Header = (pros: Props) => {
  return <div style={{background: pros.color}}>Header, Header, Header</div>;
};
