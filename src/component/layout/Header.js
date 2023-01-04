import {Link} from 'react-router-dom'
import './header.scss'
import {useUserDispatch, useUserState} from '../../context/UserContext'

const Header = () => {
  const { user } = useUserState();
  const dispatch = useUserDispatch();

  const onLogOut = () => {
    alert("로그아웃 되었습니다.");
    dispatch({
      type: "LOGOUT",
    });
  };

  return (
    <header className="header">
      <ul>
        <li>
          <Link to="/">자기소개</Link>
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
          <Link to="/login">로그인페이지</Link>
        </li>
      </ul>

      {
        user ? (
          <ul>
            <li>{user.userId}님</li>
            <li><button type="submit" value="로그아웃" onClick={onLogOut}>로그아웃</button></li>
          </ul>
        ) : (
          <ul>
            <li><button type="submit" value="로그인">로그인</button></li>
          </ul>
        )
      }
    </header>
  )
}

export default Header