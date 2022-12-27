import {useState} from 'react'
import Circle2 from './Circle2'

const CircleList = () => {
  const [isCheck, setIsCheck] = useState(false)

  const onCheck = () => {
    setIsCheck(!isCheck)
  }

  return (
    <div>
      <h3>부모에서 자식으로 데이터 전달</h3>
      <p>props를 이용</p>

      <Circle2
        isCheck={isCheck}
        onCheck={onCheck}/>

      <Circle2
        isCheck={isCheck}
        onCheck={onCheck}/>

      <Circle2
        isCheck={isCheck}
        onCheck={onCheck}/>
    </div>
  )
}

export default CircleList
