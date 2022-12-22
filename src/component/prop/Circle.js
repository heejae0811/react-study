import {useState, useEffect} from 'react'
import './../../scss/component/prop/circle.scss'

// Circle(props) 이라고 작성해도 된다. props.text props.activeAll..
// 아래 방식은 비구조화 할당 또는 구조 분해 라고 한다.
function Circle({isCheck, onCheckAll, checkItem, setCheckItem}) {
  // const [isCheck, setIsCheck] = useState(false)

  const onCheck = () => {
    onCheckAll(!isCheck)
  }

  // useEffect(() => {
  //   if (isCheck === true) {
  //     onCheckAll(false)
  //   } else {
  //     onCheckAll(true)
  //   }
  // }, [onCheck])

  return (
    <div className="circle">
      <button
        className={isCheck ? 'on' : ''}
        onClick={onCheck}/>
    </div>
  )
}

export default Circle
