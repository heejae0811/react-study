import {useNavigate} from 'react-router'
import './index.scss'

const Error = () => {
  const navigate = useNavigate()

  return (
    <div className="error inner">
      <h1>로그인을 하셔야 이용 가능합니다.</h1>
      <button className="btn-login" onClick={() => navigate('/react-study')}>로그인 하러가기</button>
    </div>
  )
}

export default Error