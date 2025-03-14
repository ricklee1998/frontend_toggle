import { BlackButton } from "@repo/ui/blackButton";
import "./MainLayout.css";
import { useNavigate } from "react-router-dom";
import { debounce } from "lodash";
import { useState } from "react";
const MainLayout = ({ name }: { name: string }) => {
  const navigate = useNavigate();
  const [isBtnLoading, setIsBtnLoading] = useState(false);
  const buttonClick = () => {
    setIsBtnLoading(true);
    handleClick();
  };
  const handleClick = debounce(() => {
    navigate("/Result");
    setIsBtnLoading(false);
  }, 500);
  return (
    <div className="main-layout">
      <div className="main-header">
        <p>{"이선위"}</p>
      </div>
      <div className="main-body">
        <p>
          {"안녕하세요"}
          <br /> {name}
          {"입니다"}
        </p>
      </div>
      <div className="main-footer">
        {isBtnLoading ? (
          <button className="loading-button-main">
            <div className="loading-spinner" />
          </button>
        ) : (
          <BlackButton text="다음" onClick={buttonClick} />
        )}
      </div>
    </div>
  );
};

export default MainLayout;
