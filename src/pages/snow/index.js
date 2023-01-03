// import {useState} from 'react'
import Snowflake from '../../component/snow/Snowflake'
import './index.scss'

function SnowPage() {
  const snowList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

  return (
    <div className="snow-page">
      <Snowflake/>

      {
        snowList.map((item, i) => (
          <Snowflake key={`snow-${i}`}/>
        ))
      }
    </div>
  )
}

export default SnowPage
