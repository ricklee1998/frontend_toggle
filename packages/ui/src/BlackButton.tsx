import React from "react";
import '../css/blackButton.css'

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const BlackButton = ({ text, onClick}: ButtonProps) => {
  return (
    <button className="black-button" onClick={onClick}>
      {text}
    </button>
  );
}

export default BlackButton;