'use-client'
import '../css/blackButton.css'

interface ButtonProps {
  text: string;
  onClick?: () => void;
  width?: number;
}

export const BlackButton = ({ text, onClick, width}: ButtonProps) => {
  return (
    <button 
      className="black-button" 
      onClick={onClick}
      style={{ width: width ? width : '335px' }}
    >
      {text}
    </button>
  );
}