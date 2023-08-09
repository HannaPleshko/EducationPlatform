import React from "react";

interface HeaderProps {
  option: string;
  setCurOption: (param: string) => void;
}

const Options: React.FC<HeaderProps> = ({ option, setCurOption }) => {
  return <p onClick={() => setCurOption(option)}>{option}</p>;
};

export default Options;
