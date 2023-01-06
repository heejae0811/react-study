import {useUserState} from '../../context/UserContext'

function MyPage() {
  const {user} = useUserState()
  // const {userData} = useUserState()

  // const {userData} = useUserState()

  // console.log(userData)

  return (
    <div className="my-page">
      <h2>{user.userId}님 환영합니다.</h2>
      <p>이름: {user.name}</p>
      <p>전화번호: {user.phoneNumber}</p>
    </div>
  )
}

export default MyPage
