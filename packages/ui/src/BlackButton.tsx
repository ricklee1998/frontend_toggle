"use-client";
import "../css/blackButton.scss";
import { noop } from "lodash";
interface ButtonProps {
  text: string;
  onClick?: () => void;
  width?: string;
  fontSize?: string;
  isLoading: boolean;
}

export const BlackButton = ({
  text,
  onClick,
  width,
  fontSize,
  isLoading,
}: ButtonProps) => {
  return (
    <button
      className="black-button"
      onClick={isLoading ? noop : onClick}
      style={{
        width: width ? width : "335px",
        fontSize: fontSize ? fontSize : "16px",
      }}
    >
      {isLoading ? <div className="loading-spinner" /> : text}
    </button>
  );
};
