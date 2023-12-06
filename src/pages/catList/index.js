import {useNavigate} from 'react-router'
import {useDispatch, useSelector} from 'react-redux'
import {handleDeletedCat} from '../../redux/cat'
import {catStatus} from '../../database/cats'

const CatList = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const catList = useSelector(state => state.cat.cats)

    const handelDelete = (index) => {
        const deletedCat = catList.map(cat => cat.name)
        const deletedCatName = deletedCat[index]

        if (window.confirm('삭제하시겠습니까?')) {
            dispatch(handleDeletedCat(deletedCatName))
        } else {
            return false
        }
    }

    // TODO :: 리스트에 순서대로 안들어감
    return (
        <>
            {
                catList.length === 0 ? (
                    <h1>고양이 목록이 없습니다.</h1>
                ) : (
                    <></>
                )
            }

            <h1 className="mb-12 text-3xl font-bold text-center">고양이 키우기</h1>

            <div className="mb-6 text-right">
                <button
                    className="max-w-xs p-3 bg-indigo-400 hover:bg-indigo-500 transition rounded text-lg font-bold"
                    onClick={() => navigate('/catCreate')}>
                    고양이 추가하기
                </button>
            </div>
            
            <p className="mb-3 text-base">총 {catList.length} 마리</p>

            <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {
                    catList.map((cat, index) => (
                        <li
                            className="p-6 border hover:border-indigo-700 transition rounded text-center group"
                            key={index}>
                            <a href={`/catDetail/${cat.name}`}>
                                <h2 className="mb-6 text-xl group-hover:text-indigo-700 transition font-semibold">{cat.name}</h2>

                                <img
                                    className={cat.status === catStatus.die ? 'mb-6 border group-hover:border-indigo-700 transition rounded-full brightness-50' : 'mb-6 border group-hover:border-indigo-700 transition rounded-full'}
                                    src={cat.profileImage}
                                    alt={cat.name}/>

                                <div className="flex justify-items-center items-center gap-3 w-fit m-auto mb-3">
                                    <p className="text-lg">나이</p>
                                    <p className="text-lg">{cat.age}</p>
                                </div>

                                <div className="flex justify-items-center items-center gap-3 w-fit m-auto mb-3">
                                    <p className="text-lg">몸무게</p>
                                    <p className="text-lg">{cat.weight}kg</p>
                                </div>

                                <div className="flex justify-items-center items-center gap-3 w-fit m-auto mb-3">
                                    <p className="text-lg">상태</p>
                                    <p className="text-lg">{cat.status}</p>
                                </div>

                                <div className="flex justify-items-center items-center gap-3 w-fit m-auto mb-6">
                                    <p className="text-lg">성별</p>
                                    <p className="text-lg">{cat.gender}</p>
                                </div>
                            </a>

                            <button
                                className="w-full p-3 bg-indigo-400 hover:bg-indigo-500 transition rounded text-lg font-semibold"
                                onClick={() => handelDelete(index)}>
                                삭제하기
                            </button>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default CatList