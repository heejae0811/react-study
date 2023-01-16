import {useUserDispatch, useUserState} from '../../context/UserContext'
import {Link} from 'react-router-dom'
import './header.scss'

const Header = () => {
  // const {user} = useUserState()
  // const dispatch = useUserDispatch()
  //
  // const onLogOut = () => {
  //   alert('로그아웃 되었습니다.')
  //   dispatch({
  //     type: 'LOGOUT'
  //   })
  // }

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
                  <Link to="/mypage">마이페이지</Link>
                </li>

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

        </ul>
      </nav>

      {/*{*/}
      {/*  user ? (*/}
      {/*    <ul>*/}
      {/*      <li>{user.loginId} 님</li>*/}
      {/*      <li className="logout" onClick={onLogOut}>로그아웃</li>*/}
      {/*    </ul>*/}
      {/*  ) : (*/}
      {/*    <ul>*/}
      {/*      <li>*/}
      {/*        <Link to="/">로그인</Link>*/}
      {/*      </li>*/}
      {/*    </ul>*/}
      {/*  )*/}
      {/*}*/}
    </header>
  )
}

export default Header