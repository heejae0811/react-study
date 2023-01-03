import Snowflake from './Snowflake'
import './snowflake.scss'

const Snow = ({isShow}) => {
  const snowList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

  return (
    <>
      {
        snowList.map((item, i) => (
          <Snowflake
            key={`snow-${i}`}
            isShow={isShow}
          />
        ))
      }
    </>
  )
}

export default Snow
