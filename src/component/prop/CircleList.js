import {useState} from 'react'
import Circle from './Circle'

function CircleList() {
  const [activeAll, setActiveAll] = useState(false)

  const selectAll = () => {
    setActiveAll(!activeAll)
  }

  return (
    <div className="circle-list">
      <Circle
        text={'ALL'}
        activeAll={activeAll}
        selectAll={selectAll}/>
      <Circle activeAll={activeAll}/>
      <Circle activeAll={activeAll}/>
      <Circle activeAll={activeAll}/>
      <Circle activeAll={activeAll}/>
    </div>
  )
}

export default CircleList
