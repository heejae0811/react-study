import {useState} from 'react'
import Circle from './Circle'

const CircleList = () => {
  const [isCheck, setIsCheck] = useState(false)

  const onCheck = (isCheck) => {
    setIsCheck(isCheck)
  }

  return (
    <div>
      <h3>자식에서 부모로 데이터 전달</h3>
      <p>함수를 이용</p>

      <Circle
        isCheck={isCheck}
        onCheck={onCheck}/>

      <Circle
        isCheck={isCheck}
        onCheck={onCheck}/>

      <Circle
        isCheck={isCheck}
        onCheck={onCheck}/>
    </div>
  )
}

export default CircleList
