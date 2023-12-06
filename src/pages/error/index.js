import {useNavigate} from 'react-router'

const Error = () => {
    const navigate = useNavigate()

    return (
        <>
            <h1 className="mb-12 text-3xl font-bold text-center">로그인을 하셔야 이용 가능합니다.</h1>
            <button
                className="w-full p-3 bg-indigo-400 hover:bg-indigo-500 transition rounded text-lg font-bold"
                onClick={() => navigate('/react-study')}>
                메인 페이지로 돌아가기
            </button>
        </>
    )
}

export default Error