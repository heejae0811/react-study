import {useNavigate} from 'react-router'
import {useDispatch, useSelector} from 'react-redux'
import {handleLogout} from '../../redux/user'

const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const loginUser = useSelector(state => state.user.loginUser)

    const onLogout = () => {
        alert('로그아웃 되었습니다.')

        dispatch(handleLogout())
        navigate('/')
    }

    return (
        <header className="mb-12">
            {
                loginUser !== null ? (
                    <nav>
                        <ul className="flex gap-6">
                            <li className="text-xl hover:text-indigo-700 transition font-semibold">
                                <a href="/mypage">My Page</a>
                            </li>
                            <li className="text-xl hover:text-indigo-700 transition font-semibold">
                                <button onClick={onLogout}>Log out</button>
                            </li>
                        </ul>
                    </nav>
                ) : (
                    <>
                    </>
                )
            }
        </header>
    )
}

export default Header