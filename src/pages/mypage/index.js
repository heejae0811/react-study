import {useSelector} from 'react-redux'

function MyPage() {
    const loginUser = useSelector(state => state.user.loginUser)

    return (
        <>
            <h1 className="mb-12 text-3xl font-bold text-center">MY PAGE</h1>

            <ul>
                <li className="flex justify-items-start items-center gap-6 mb-10">
                    <p className="w-1/4 text-lg font-semibold">ID</p>
                    <p className="w-3/4 text-lg font-semibold">{loginUser.loginId}</p>
                </li>
                <li className="flex justify-items-start items-center gap-6 mb-10">
                    <p className="w-1/4 text-lg font-semibold">Password</p>
                    <p className="w-3/4 text-lg font-semibold">{loginUser.password}</p>
                </li>
                <li className="flex justify-items-start items-center gap-6 mb-10">
                    <p className="w-1/4 text-lg font-semibold" >Name</p>
                    <p className="w-3/4 text-lg font-semibold">{loginUser.name}</p>
                </li>
                <li className="flex justify-items-start items-center gap-6">
                    <p className="w-1/4 text-lg font-semibold">Phone Number</p>
                    <p className="w-3/4 text-lg font-semibold">{loginUser.phoneNumber}</p>
                </li>
            </ul>
        </>
    )
}

export default MyPage
