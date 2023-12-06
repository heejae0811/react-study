import {useNavigate} from 'react-router'
import {useDispatch, useSelector} from 'react-redux'
import {handleLogout} from '../../redux/user'

const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const loginUser = useSelector(state => state.user.loginUser)

    const onLogout = () => {
        if(window.confirm('로그아웃 하시겠습니까?')) {
            dispatch(handleLogout())
            navigate('/')
        }
    }

    return (
        <header className="mb-12">
            {
                loginUser !== null ? (
                    <nav>
                        <ul className="flex gap-6">
                            <li className="text-xl hover:text-indigo-700 transition font-semibold">
                                <a href="/catList">고양이 키우기</a>
                            </li>
                            <li className="text-xl hover:text-indigo-700 transition font-semibold">
                                <a href="/mypage">마이 페이지</a>
                            </li>
                            <li className="text-xl hover:text-indigo-700 transition font-semibold">
                                <button onClick={onLogout}>로그아웃</button>
                            </li>
                        </ul>
                    </nav>
                ) : (
                    <></>
                )
            }
        </header>
    )
}

export default Header