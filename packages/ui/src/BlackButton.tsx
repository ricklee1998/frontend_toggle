"use client";
import '../css/blackButton.css'

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

export const BlackButton = ({ text, onClick}: ButtonProps) => {
  return (
    <button className="black-button" onClick={onClick}>
      {text}
    </button>
  );
}