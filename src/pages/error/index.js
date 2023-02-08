import {useNavigate} from 'react-router'
import Button from '../../component/Button'
import './index.scss'

const Error = () => {
  const navigate = useNavigate()

  return (
    <div className="error inner">
      <h1>로그인을 하셔야 이용 가능합니다.</h1>
      <Button onClick={() => navigate('/react-study')} maxWidth="300" bgColor="#f6b352">Go to Login</Button>
    </div>
  )
}

export default Error