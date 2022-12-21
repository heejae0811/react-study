import {useState} from 'react'
import './../../scss/component/prop/circle.scss'

function Circle(props) {
  const [active, setActive] = useState(false)

  return (
    <div className="circle">
        <button
          className={active ? 'on' : '' || props.activeAll ? 'on' : ''}
          onClick={() => {setActive(!active);  props.selectAll();}}>{props.text}</button>
    </div>
  )
}

export default Circle
