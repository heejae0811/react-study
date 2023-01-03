import '../../scss/component/props/circle.scss'

// Circle(props) 이라고 작성해도 된다. props.text props.activeAll..
// 아래 방식은 비구조화 할당 또는 구조 분해 라고 한다.
const Circle = ({ isCheck, setIsCheck, children }) => {
  const onCheck = () => {
    setIsCheck(!isCheck)
  }

  return (
    // {children}을 사용하면 컴포넌트의 자식의 자식 형태로 사용할 수 있다.
    <div className="circle">
      <button
        className={isCheck ? 'on' : ''}
        onClick={onCheck}/>
      {children}
    </div>
  )
}

export default Circle
