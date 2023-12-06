import {useState} from 'react'
import {useNavigate} from 'react-router'
import {useDispatch, useSelector} from 'react-redux'
import {handleLogin} from '../../redux/user'

function Login() {
    const [isId, setId] = useState('')
    const [isPassword, setPassword] = useState('')

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const users = useSelector(state => state.user.users)
    const loginUser = useSelector(state => state.user.loginUser)

    const onLogin = () => {
        const userId = users.filter(user => user.loginId === isId)
        const userPw = users.filter(user => user.password === isPassword)

        if (isId === '') {
            alert('아이디를 입력해주세요.')
        } else if (isPassword === '') {
            alert('비밀번호를 입력해주세요.')
        } else if (userId.length === 0) {
            alert('아이디가 틀렸습니다.')
        } else if (userPw.length === 0) {
            alert('비밀번호가 틀렸습니다.')
        } else {
            dispatch(handleLogin({
                loginId: isId,
                password: isPassword
            }))
            alert('로그인 됐습니다.')
            navigate('/catList')
        }
    }

    return (
        <div className="login inner">
            {
                loginUser === null ? (
                    <>
                        <h1 className="mb-12 text-3xl font-bold text-center">로그인</h1>

                        <form>
                            <div className="mb-6">
                                <p className="mb-3 text-lg font-semibold">아이디</p>
                                <label>
                                    <input
                                        type="text"
                                        value={isId}
                                        onChange={e => setId(e.target.value)}
                                        placeholder="아이디를 입력해주세요. (test)"
                                        className="w-full p-3 outline-none rounded"/>
                                </label>
                            </div>

                            <div className="mb-9">
                                <p className="mb-3 text-lg font-semibold">비밀번호</p>
                                <label>
                                    <input
                                        type="password"
                                        value={isPassword}
                                        onChange={e => setPassword(e.target.value)}
                                        placeholder="비밀번호를 입력해주세요. (123)"
                                        className="w-full p-3 outline-none rounded"/>
                                </label>
                            </div>
                        </form>

                        <button
                            className="w-full p-3 bg-indigo-400 hover:bg-indigo-500 transition rounded text-lg font-bold"
                            onClick={onLogin}>
                            로그인 하기
                        </button>
                    </>
                ) : (
                    <>
                        <h1 className="mt-6 mb-12 text-3xl font-bold text-center">로그인 됐습니다.</h1>
                        <button
                            className="w-full p-3 bg-indigo-400 hover:bg-indigo-500 transition rounded text-lg font-bold"
                            onClick={() => navigate('/catList')}>
                            고양이 키우러 가기
                        </button>
                    </>
                )
            }
        </div>
    )
}

export default Login