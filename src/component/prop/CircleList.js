import {useState} from 'react'
import Circle from './Circle'

const CircleList = () => {
  const [isCheck1, setIsCheck1] = useState(false)
  const [isCheck2, setIsCheck2] = useState(false)

  return (
    <div>
      <Circle
        isCheck={isCheck1}
        setIsCheck={setIsCheck1}>
        <Circle
          isCheck={isCheck2}
          setIsCheck={setIsCheck2}>
        </Circle>
      </Circle>

      <Circle
        isCheck={isCheck1}
        setIsCheck={setIsCheck1}/>

      <Circle
        isCheck={isCheck2}
        setIsCheck={setIsCheck2}/>
    </div>
  )
}

export default CircleList
