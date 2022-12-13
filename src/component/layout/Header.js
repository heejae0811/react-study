import {Link} from 'react-router-dom'
import './../../scss/component/layout/header.scss'

const Header = () => {
  return (
    <header className="header">
      <ul>
        <li>
          <Link to="/">메인 페이지</Link>
        </li>
        <li>
          <Link to="/project">프로젝트 페이지</Link>
        </li>
        <li>
          <Link to="/study">스터디 페이지</Link>
        </li>
      </ul>
    </header>
  )
}

export default Header