import {useState} from 'react'
import Snow from '../../component/snow/Snow'
import './index.scss'

function SnowPage() {
  const [active, isActive] = useState(false)

  const showThemeChange = () => {
    isActive(!active)
  }

  return (
    <div className="snow-page">
      <button onClick={showThemeChange}>Snow Color Change</button>

      <Snow
        active={active}
        isActive={isActive}/>
    </div>
  )
}

export default SnowPage