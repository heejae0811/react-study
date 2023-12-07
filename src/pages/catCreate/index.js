import {useState, useRef} from 'react'
import {useNavigate} from 'react-router'
import {useDispatch} from 'react-redux'
import {handleCreatedCat} from '../../redux/cat'
import Button from '../../component/Button'

const CatCreate = () => {
    const [isProfile, setProfile] = useState('')
    const [isName, setName] = useState('')
    const [isAge, setAge] = useState('')
    const [isWeight, setWeight] = useState('')
    const [isStatus, setStatus] = useState('')
    const [isGender, setGender] = useState('')

    const fileInputRef = useRef(null)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const uploadImage = (e) => {
        const fileList = e.target.files

        if (fileList && fileList[0]) {
            const url = URL.createObjectURL(fileList[0])

            setProfile({
                file: fileList[0],
                thumbnail: url,
                type: fileList[0].type.slice(0, 5)
            })
        }
    }

    const createCat = () => {
        const createCat = {
            profileImage: isProfile.thumbnail,
            name: isName,
            age: Number(isAge),
            weight: Number(isWeight),
            status: isStatus,
            gender: isGender,
            history: []
        }

        if (isProfile === '') {
            alert('이미지를 등록해 주세요.')
        } else if (isName === '') {
            alert('이름을 입력해 주세요.')
        } else if (isAge === '') {
            alert('나이를 입력해 주세요.')
        } else if (isWeight === '') {
            alert('체중을 입력해 주세요.')
        } else if (isStatus === '') {
            alert('상태를 선택해 주세요.')
        } else if (isGender === '') {
            alert('성별을 선택해 주세요.')
        } else {
            dispatch(handleCreatedCat(createCat))
            navigate('/catList')
        }
    }

    return (
        <>
            <h1 className="mb-12 text-3xl font-bold text-center">고양이 추가하기</h1>

            <form>
                <div className="mb-6">
                    <p className="mb-3 text-lg font-semibold">이미지</p>
                    {
                        isProfile === '' ? (
                            <></>
                        ) : (
                            <>
                                <img src={isProfile.thumbnail} alt="cat"/>
                            </>
                        )
                    }
                    <label>
                        <input
                            type="file"
                            name="image"
                            accept="image/jpg, image/jpeg, image/png"
                            ref={fileInputRef}
                            onChange={uploadImage}
                            className="w-full outline-none rounded"/>
                    </label>
                </div>

                <div className="mb-6">
                    <p className="mb-3 text-lg font-semibold">이름</p>
                    <label>
                        <input
                            type="text"
                            name="name"
                            value={isName} onChange={e => setName(e.target.value)}
                            placeholder="이름을 입력해 주세요."
                            className="w-full p-3 outline-none rounded"/>
                    </label>
                </div>

                <div className="mb-6">
                    <p className="mb-3 text-lg font-semibold">나이</p>
                    <label>
                        <input
                            type="number"
                            name="age"
                            value={isAge} onChange={e => setAge(e.target.value)}
                            placeholder="나이를 입력해 주세요."
                            className="w-full p-3 outline-none rounded"/>
                    </label>
                </div>

                <div className="mb-6">
                    <p className="mb-3 text-lg font-semibold">몸무게</p>
                    <label>
                        <input
                            type="number"
                            name="weight"
                            value={isWeight} onChange={e => setWeight(e.target.value)}
                            placeholder="체중을 입력해 주세요."
                            className="w-full p-3 outline-none rounded"/>
                    </label>
                </div>

                <div className="mb-6">
                    <p className="mb-3 text-lg font-semibold">상태</p>

                    <div className="flex gap-6">
                        <label class="flex justify-items-start items-center gap-2">
                            <input
                                type="radio"
                                name="status"
                                value="정상"
                                onChange={e => setStatus(e.target.value)}
                                className="w-5 h-5"/>
                            정상
                        </label>
                        <label className="flex justify-items-start items-center gap-2">
                            <input
                                type="radio"
                                name="status"
                                value="비만"
                                onChange={e => setStatus(e.target.value)}
                                className="w-5 h-5"/>
                            비만
                        </label>
                        <label className="flex justify-items-start items-center gap-2">
                            <input
                                type="radio"
                                name="status"
                                value="사망"
                                nChange={e => setStatus(e.target.value)}
                                className="w-5 h-5"/>
                            사망
                        </label>
                    </div>
                </div>

                <div className="mb-12">
                    <p className="mb-3 text-lg font-semibold">성별</p>

                    <div className="flex gap-6">
                        <label className="flex justify-items-start items-center gap-2">
                            <input
                                type="radio"
                                name="gender"
                                value="수컷"
                                onChange={e => setGender(e.target.value)}
                                className="w-5 h-5"/>
                            수컷
                        </label>
                        <label className="flex justify-items-start items-center gap-2">
                            <input
                                type="radio"
                                name="gender"
                                value="암컷"
                                onChange={e => setGender(e.target.value)}
                                className="w-5 h-5"/>
                            암컷
                        </label>
                    </div>
                </div>
            </form>

            <div className="grid grid-cols-2 gap-4 md:gap-6">
                <button
                    className="w-full p-3 bg-indigo-400 hover:bg-indigo-500 transition rounded text-lg font-bold"
                    onClick={createCat}>
                    추가하기
                </button>
                <button
                    className="w-full p-3 bg-indigo-100 hover:bg-indigo-500 transition rounded text-lg font-bold"
                    onClick={() => navigate('/catList')}>
                    취소하기
                </button>
            </div>
        </>
    )
}

export default CatCreate