import {useNavigate} from 'react-router'
import './index.scss'

const Access = () => {
  const navigate = useNavigate()

  return (
    <div className="access">
      <h1>로그인을 하셔야 이용가능합니다.</h1>
      <button className="btn-login" onClick={() => navigate('/react-study')}>로그인 하러가기</button>
    </div>
  )
}

export default Access