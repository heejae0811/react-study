import {useState} from 'react'
import {Link} from 'react-router-dom'
import {useAuth} from '../../hooks/useAuth'
import './header.scss'

const Header = () => {
  const [login, setLogin] = useState(
    () => JSON.parse(window.localStorage.getItem('login'))
  )
  const [userList, loginValue, isLogin, isLogout] = useAuth()

  // TODO :: userList, isLogin 작성하지 않으면 isLogout() 함수 호출 안됨
  const onLogout = () => {
    isLogout()
  }

  return (
    <header className="header">
      <nav>
        <ul>
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
            <Link to="/cat">고양이 밥주기</Link>
          </li>
        </ul>
      </nav>

      {
        loginValue.login ? (
          <ul>
            <li>{login[0].loginId} 님</li>
            <li>
              <Link to="/mypage">마이페이지</Link>
            </li>
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