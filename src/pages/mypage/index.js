import {useSelector} from 'react-redux'
import './index.scss'

function MyPage() {
  const loginUser = useSelector(state => state.user.loginUser)

  return (
    <div className="my-page inner">
      <h1>MY PAGE</h1>

      <ul>
        <li>
          <p>ID</p>
          <p>{loginUser.loginId}</p>
        </li>
        <li>
          <p>Password</p>
          <p>{loginUser.password}</p>
        </li>
        <li>
          <p>Name</p>
          <p>{loginUser.name}</p>
        </li>
        <li>
          <p>Phone Number</p>
          <p>{loginUser.phoneNumber}</p>
        </li>
      </ul>
    </div>
  )
}

export default MyPage
