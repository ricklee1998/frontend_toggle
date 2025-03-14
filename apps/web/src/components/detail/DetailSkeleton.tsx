import './Detail.scss';
const DetailSkeleton = () => {
  return (
    <div className="result-layout">
      <div className="result-header">
        <p>{'이선위'}</p>
      </div>
      <div className="result-body">
        <div className="result-body-container">
          <div className="skeleton-left-box">
            <div />
          </div>
          <div className="skeleton-right-box">
            <div className="skeleton-info-box" />
            <div className="skeleton-info-box" />
            <div className="skeleton-info-box" />
            <div className="skeleton-info-button">
              <div />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailSkeleton;
