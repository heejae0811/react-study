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
                        <ul className="flex gap-4 md:gap-6">
                            <li
                                className="text-lg md:text-xl hover:text-indigo-700 transition font-semibold cursor-pointer"
                                onClick={() => navigate('/catList')}>
                                고양이 키우러 가기
                            </li>
                            <li
                                className="text-lg md:text-xl hover:text-indigo-700 transition font-semibold cursor-pointer"
                                onClick={() => navigate('/mypage')}>
                                내 정보
                            </li>
                            <li
                                className="text-lg md:text-xl hover:text-indigo-700 transition font-semibold cursor-pointer"
                                onClick={onLogout}>
                                로그아웃
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