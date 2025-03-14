import { BlackButton } from "@repo/ui/BlackButton";
import "./MainLayout.scss";
import { useNavigate } from "react-router-dom";
import { debounce } from "lodash";
import { useEffect, useState } from "react";
const MainLayout = ({ name }: { name: string }) => {
  const navigate = useNavigate();
  const [isBtnLoading, setIsBtnLoading] = useState<boolean>(false);
  const [fontSize, setFontSize] = useState<string>("16px");
  const buttonClick = () => {
    setIsBtnLoading(true);
    handleClick();
  };
  const handleClick = debounce(() => {
    navigate("/Result");
    setIsBtnLoading(false);
  }, 500);
  useEffect(() => {
    const handleResize = () => {
      setFontSize(window.innerWidth > 768 ? "24px" : "16px");
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
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
        <BlackButton
          text="다음"
          fontSize={fontSize}
          onClick={buttonClick}
          isLoading={isBtnLoading}
        />
      </div>
    </div>
  );
};

export default MainLayout;
