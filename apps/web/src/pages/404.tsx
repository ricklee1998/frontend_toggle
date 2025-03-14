import { useNavigate } from 'react-router-dom';
import './404.scss';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-description">페이지를 찾을 수 없습니다</p>
      <button className="home-button" onClick={() => navigate("/")}>
        {'홈으로'}
      </button>
    </div>
  );
}
