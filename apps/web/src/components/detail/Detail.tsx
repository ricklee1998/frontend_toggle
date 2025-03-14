import { BlackButton } from '@repo/ui/BlackButtons';
import './Detail.scss';
import { useNavigate } from 'react-router-dom';
import type { ImageInfo } from '../../interface/detail';
import { useEffect, useState } from 'react';
import { debounce } from 'lodash';
const Detail = ({
  data,
  loadedImage,
}: {
  data: ImageInfo;
  loadedImage: HTMLImageElement | null;
}) => {
  const navigate = useNavigate();
  const [isBtnLoading, setIsBtnLoading] = useState<boolean>(false);
  const [isSmSize, setIsSmSize] = useState<boolean>(false);
  const buttonClick = () => {
    setIsBtnLoading(true);
    handleClick();
  };
  // debounce 기능 추가
  const handleClick = debounce(() => {
    navigate("/");
    setIsBtnLoading(false);
  }, 500);

  //handleResize에 따라 css 사이즈 설정
  useEffect(() => {
    const handleResize = () => {
      setIsSmSize(window.innerWidth > 375 ? false : true);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div
      className="result-layout"
      style={{
        backgroundImage: loadedImage ? `url(${loadedImage.src})` : 'none',
      }}
    >
      <div className="result-header">
        <p>{'이선위'}</p>
      </div>
      <div className="result-body">
        <div className="result-body-container">
          <div className="left-box">
            {loadedImage ? <img src={loadedImage.src} alt={data.author} loading="lazy" /> : null}
          </div>
          <div className="right-box">
            <div className="info-box-row">
              <div className="info-box-content">
                <p>
                  {'id'}
                  <br />
                  <span>{data.id}</span>
                </p>
              </div>
              <div className="info-box-content">
                <p>
                  {'author'}
                  <br />
                  <span>{data.author}</span>
                </p>
              </div>
            </div>
            <div className="info-box-row">
              <div className="info-box-content">
                <p>
                  {'width'}
                  <br />
                  <span>{Number(data.width).toLocaleString('ko-KR')}</span>
                </p>
              </div>
              <div className="info-box-content">
                <p>
                  {'height'}
                  <br />
                  <span>{Number(data.height).toLocaleString('ko-KR')}</span>
                </p>
              </div>
            </div>
            <div className="info-box-col">
              <div className="info-box-content">
                <p>
                  {'url'}
                  <br />
                  <span>
                    <a
                      href={data.download_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="download-link"
                    >
                      {data.url}
                    </a>
                  </span>
                </p>
              </div>
              <div className="info-box-content">
                <p>
                  {'download_url'}
                  <br />
                  <span>
                    <a
                      href={data.download_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="download-link"
                    >
                      {data.download_url}
                    </a>
                  </span>
                </p>
              </div>
            </div>
            <div>
              <BlackButton
                text="이전"
                width={isSmSize ? '335px' : '154px'}
                onClick={buttonClick}
                isLoading={isBtnLoading}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
