import {Link} from 'react-router-dom'
import './../../scss/component/layout/header.scss'

const Header = () => {
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
      </ul>
    </header>
  )
}

export default Header