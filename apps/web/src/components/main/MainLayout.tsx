import { BlackButton } from "@repo/ui/blackButton";
import "./MainLayout.css";
import { useNavigate } from "react-router-dom";

const MainLayout = ({ name }: { name: string }) => {
  const navigate = useNavigate();
  const buttonClick = () => {
    console.log("Clicked");
    navigate("/Result");
  };
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
        <BlackButton text="다음" onClick={buttonClick} />
      </div>
    </div>
  );
};

export default MainLayout;
