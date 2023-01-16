import {Link} from 'react-router-dom'
import {useAuth} from '../../hooks/useAuth'
import './header.scss'

const Header = () => {
  const [value, isLogout] = useAuth()

  // TODO :: isLogout() 함수 호출 안됨
  const onLogout = () => {
    value.setLogin(false)
    isLogout()
  }

  return (
    <header className="header">
      <nav>
        <ul>
          {
            value.login ? (
              <>
                <li>
                  <Link to="/intro">자기소개</Link>
                </li>
                <li>
                  <Link to="/todo">To Do List</Link>
                </li>
                <li>
                  <Link to="/props">부모/자식 Props</Link>
                </li>
                <li>
                  <Link to="/snow">눈 내리기</Link>
                </li>
                <li>
                  <Link to="/mypage">마이페이지</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/intro">자기소개</Link>
                </li>
                <li>
                  <Link to="/todo">To Do List</Link>
                </li>
                <li>
                  <Link to="/props">부모/자식 Props</Link>
                </li>
                <li>
                  <Link to="/snow">눈 내리기</Link>
                </li>
              </>
            )
          }
        </ul>
      </nav>

      {
        value.login ? (
          <ul>
            <li>{value.loginUser[0].loginId} 님</li>
            <li className="logout" onClick={onLogout}>로그아웃</li>
          </ul>
        ) : (
          <ul>
            <li>
              <Link to="/">로그인</Link>
            </li>
          </ul>
        )
      }
    </header>
  )
}

export default Header