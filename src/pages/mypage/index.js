import {useNavigate} from 'react-router'
import {useSelector} from 'react-redux'

function MyPage() {
    const navigate = useNavigate()

    const loginUser = useSelector(state => state.user.loginUser)

    return (
        <>
            <h1 className="mb-12 text-3xl font-bold text-center">내 정보</h1>

            <ul>
                <li className="flex justify-items-start items-center gap-6 mb-12">
                    <p className="w-1/4 text-lg font-semibold">아이디</p>
                    <p className="w-3/4 text-lg font-semibold">{loginUser.loginId}</p>
                </li>
                <li className="flex justify-items-start items-center gap-6 mb-12">
                    <p className="w-1/4 text-lg font-semibold">비밀번호</p>
                    <p className="w-3/4 text-lg font-semibold">{loginUser.password}</p>
                </li>
                <li className="flex justify-items-start items-center gap-6 mb-12">
                    <p className="w-1/4 text-lg font-semibold">이름</p>
                    <p className="w-3/4 text-lg font-semibold">{loginUser.name}</p>
                </li>
                <li className="flex justify-items-start items-center gap-6 mb-12">
                    <p className="w-1/4 text-lg font-semibold">휴대폰 번호</p>
                    <p className="w-3/4 text-lg font-semibold">{loginUser.phoneNumber}</p>
                </li>
            </ul>

            <button
                className="w-full p-3 bg-indigo-400 hover:bg-indigo-500 transition rounded text-lg font-bold"
                onClick={() => navigate('/catList')}>
                고양이 키우러 가기
            </button>
        </>
    )
}

export default MyPage
