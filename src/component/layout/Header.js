import {useNavigate} from 'react-router'
import {useDispatch} from 'react-redux'
import {handleLogout} from '../../redux/user'
import './header.scss'

// TODO :: header 공통으로 빼기
const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // TODO :: dispatch 사용해서 로그아웃 시키기
  const onLogout = () => {
    alert('로그아웃 되었습니다.')

    window.localStorage.removeItem('persist:root')
    window.location.reload()

    // dispatch(handleLogout())
  }

  return (
    <header className="header">
      <nav>
        <ul>
          <li onClick={() => navigate('/mypage')}>My Page</li>
          <li onClick={onLogout}>Logout</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header