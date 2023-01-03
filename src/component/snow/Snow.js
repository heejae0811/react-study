import {useState} from 'react'
import Snowflake from './Snowflake'
import './snowflake.scss'

function Snow() {
  const snowList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  const [active, isActive] = useState(false)

  const showThemeChange = () => {
    isActive(!active)
  }

  return (
    <>
      <button onClick={showThemeChange}>Snow Color Change</button>

      {
        snowList.map((item, i) => (
          <Snowflake
            key={`snow-${i}`}
            active={active}
            isActive={isActive}
          />
        ))
      }
    </>
  )
}

export default Snow
