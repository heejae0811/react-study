import './../../scss/component/prop/circle.scss'

function Circle({ isCheck, onCheck }) {
  const clickCheck = () => {
    onCheck(!isCheck)
  }

  return (
    <div className="circle">
      <button
        className={isCheck ? 'on' : ''}
        onClick={clickCheck}/>
    </div>
  )
}

export default Circle
