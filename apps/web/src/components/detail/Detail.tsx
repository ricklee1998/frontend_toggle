import { BlackButton } from '@repo/ui/blackButton';
import './Detail.css';
import { useNavigate } from 'react-router-dom';

const Detail = () => {
  const navigate = useNavigate();
  const buttonClick = () => {
    console.log("Clicked")
    navigate('/');
  }
  return(
    <div className="result-layout">
      <div className="result-header">
        <p>{"지원자분 성함을 적어주세요"}</p>
      </div>
      <div className="result-body">
        <BlackButton text='이전' onClick={buttonClick}/>
      </div>

    </div>
  )
}

export default Detail;