import { BlackButton } from "@repo/ui/blackButton";
import "./Detail.css";
import { useNavigate } from "react-router-dom";
import type { ImageInfo } from "../../interface/detail";
import { useState } from "react";
import { debounce } from "lodash";
const Detail = ({
  data,
  loadedImage,
}: {
  data: ImageInfo;
  loadedImage: HTMLImageElement | null;
}) => {
  const navigate = useNavigate();
  const [isBtnLoading, setIsBtnLoading] = useState(false);

  const buttonClick = () => {
    setIsBtnLoading(true);
    handleClick();
  };
  const handleClick = debounce(() => {
    navigate("/");
    setIsBtnLoading(false);
  }, 500);

  return (
    <div className="result-layout">
      <div className="result-header">
        <p>{"이선위"}</p>
      </div>
      <div className="result-body">
        <div className="result-body-container">
          <div className="left-box">
            {loadedImage ? (
              <img src={loadedImage.src} alt={data.author} />
            ) : null}
          </div>
          <div className="right-box">
            <div className="info-box-row">
              <div className="info-box-content">
                <p>
                  {"id"}
                  <br />
                  <span>{data.id}</span>
                </p>
              </div>
              <div className="info-box-content">
                <p>
                  {"author"}
                  <br />
                  <span>{data.author}</span>
                </p>
              </div>
            </div>
            <div className="info-box-row">
              <div className="info-box-content">
                <p>
                  {"width"}
                  <br />
                  <span>{data.width}</span>
                </p>
              </div>
              <div className="info-box-content">
                <p>
                  {"height"}
                  <br />
                  <span>{data.height}</span>
                </p>
              </div>
            </div>
            <div className="info-box-col">
              <div className="info-box-content">
                <p>
                  {"url"}
                  <br />
                  <span>{data.url}</span>
                </p>
              </div>
              <div className="info-box-content">
                <p>
                  {"download_url"}
                  <br />
                  <span>{data.download_url}</span>
                </p>
              </div>
            </div>
            <div>
              {isBtnLoading ? (
                <button className="loading-button-detail">
                  <div className="loading-spinner" />
                </button>
              ) : (
                <BlackButton text="이전" width={154} onClick={buttonClick} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
