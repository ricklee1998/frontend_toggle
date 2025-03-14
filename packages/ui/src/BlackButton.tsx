"use-client";
import "../css/blackButton.scss";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  width?: string;
  fontSize?: string;
}

export const BlackButton = ({
  text,
  onClick,
  width,
  fontSize,
}: ButtonProps) => {
  return (
    <button
      className="black-button"
      onClick={onClick}
      style={{
        width: width ? width : "335px",
        fontSize: fontSize ? fontSize : "16px",
      }}
    >
      {text}
    </button>
  );
};
