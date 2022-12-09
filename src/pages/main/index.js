import { Link } from 'react-router-dom'

function MainPage() {
  return (
    <div>
      <h1>메인 페이지</h1>

      <ul>
        <li>
          <Link to="/">메인 페이지</Link>
          <Link to="/project">프로젝트 페이지</Link>
          <Link to="/study">스터디 페이지</Link>
        </li>
      </ul>
    </div>
  );
}

export default MainPage;
