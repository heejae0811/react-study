import {useState} from 'react'
import Circle from './Circle'

const CircleList = () => {
  const [checkAll, setCheckAll] = useState(false)
  const [isCheck, setIsCheck] = useState(false)
  const [checkItem, setCheckItem] = useState([])

  const onCheckAll = (isCheck) => {
    setIsCheck(isCheck)
  }

  return (
    <div>
      <button onClick={onCheckAll}>Select All</button>

      <Circle
        isCheck={isCheck}
        onCheckAll={onCheckAll}/>

      <Circle
        isCheck={isCheck}
        onCheckAll={onCheckAll}/>

      <Circle
        isCheck={isCheck}
        onCheckAll={onCheckAll}/>
    </div>
  )
}

export default CircleList
