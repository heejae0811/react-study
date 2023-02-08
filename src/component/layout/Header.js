import {useNavigate} from 'react-router'
import {useDispatch, useSelector} from 'react-redux'
import {handleLogout} from '../../redux/user'
import './header.scss'

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const loginUser = useSelector(state => state.user.loginUser)

  // TODO :: dispatch 사용해서 로그아웃 시키기
  const onLogout = () => {
    alert('로그아웃 되었습니다.')

    window.localStorage.removeItem('persist:root')
    window.location.reload()

    // dispatch(handleLogout())
  }

  return (
    <header className="header">
      {
        loginUser !== null ? (
          <nav>
            <ul>
              <li onClick={() => navigate('/mypage')}>My Page</li>
              <li onClick={onLogout}>Logout</li>
            </ul>
          </nav>
        ) : (
          <>
          </>
        )
      }
    </header>
  )
}

export default Header