import {useDispatch} from 'react-redux'
import {handleLogout} from '../../redux/user'
import './header.scss'

// TODO :: dispatch 사용해서 로그아웃 시키기
const Header = () => {
  const dispatch = useDispatch()

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
          <li>마이페이지</li>
          <li onClick={onLogout}>로그아웃</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header