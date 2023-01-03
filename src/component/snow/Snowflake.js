const Snowflake = ({active}) => {
  const makeSnowflake = () => {
    const MIN_DURATION = 10
    const duration = Math.random() * 20 + MIN_DURATION
    const delay = Math.random() * 10

    setTimeout(() => {
      makeSnowflake()
    }, (duration + delay) * 1000)
  }

  const whiteSnowStyle = {
    left: `${Math.random() * window.screen.width}px`,
    backgroundColor: `blue`,
    opacity: Math.random(),
    animation: `fall 10s linear`
  }

  const blackSnowStyle = {
    left: `${Math.random() * window.screen.width}px`,
    backgroundColor: `red`,
    opacity: Math.random(),
    animation: `fall 10s linear`
  }

  return (
    <>
      <div
        className="snowflake"
        style={active ? whiteSnowStyle : blackSnowStyle}/>
    </>
  )
}

export default Snowflake
