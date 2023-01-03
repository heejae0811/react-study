import {useState} from 'react'
import Snow from '../../component/snow/Snow'
import './index.scss'

function SnowPage() {
  const [isShow, setIsShow] = useState(true)

  const toggleSnow = () => {
    setIsShow(!isShow)
  }

  return (
    <div className="snow-page">
      <button onClick={toggleSnow}>Show / Hide Snow</button>

      {
        isShow &&
        <Snow/>
      }
    </div>
  )
}

export default SnowPage