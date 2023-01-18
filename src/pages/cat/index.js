import {useCat} from '../../hooks/useCat'
import './index.scss'

function CatPage() {
  const [catList] = useCat()

  return (
    <div className="cat-page">
      <ul>
        {
          catList.map((list, key) => (
            <li key={`cat-${key}`}>
              <img src={list.imgSrc} alt="cat"/>
              <div>
                <p>이름: {list.name}</p>
                <p>성별: {list.gender}</p>
                <p>나이: {list.age}살</p>
                <p>몸무게: {list.weight}kg</p>
                <p>상태: {list.state}</p>
                <p>밥: {list.eat}번</p>
              </div>
            </li>
          ))
        }
      </ul>

      고양이 배열로 3마리
      디자인 이쁘게
      이름, 성별, 나이, 몸무게 등 고양이 정보 필요

      밥 2번 +1kg
      밥 3번 +1살
      나이가 15살 되면 사망 ㅜㅜ 비활성화 클릭 안됨
      체중이 30kg이 되면 상태가 비만
    </div>
  )
}

export default CatPage
