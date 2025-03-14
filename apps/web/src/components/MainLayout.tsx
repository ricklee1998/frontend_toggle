import { BlackButton } from '@repo/ui/blackButton';
import './MainLayout.css';
const MainLayout = ({name}: {name: string}) => {
  const buttonClick = () => {
    console.log("Clicked")
  }
  return(
    <div className="layout">
      <div className="header">
        <p>{"지원자분 성함을 적어주세요"}</p>
      </div>
      <div className="body">
        <p>{"안녕하세요"}<br/> {name}{"입니다"}</p>
      </div>
      <div className="footer">
        <BlackButton text='다음' onClick={buttonClick}/>
      </div>
    </div>
  )
}

export default MainLayout;