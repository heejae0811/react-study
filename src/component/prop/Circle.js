import {useState} from 'react'
import './../../scss/component/prop/circle.scss'

function Circle() {
  const [active, setActive] = useState(false)

  return (
    <div className="circle">
        <button
          className={active ? 'on' : ''}
          onClick={() => setActive(!active)}/>
    </div>
  )
}

export default Circle
