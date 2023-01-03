const Snowflake = (props) => {
  const makeSnowflake = () => {
    const MIN_DURATION = 10
    const duration = Math.random() * 20 + MIN_DURATION
    const delay = Math.random() * 10

    setTimeout(() => {
      makeSnowflake()
    }, (duration + delay) * 1000)
  }

  const snowStyle = {
    position: `absolute`,
    top: 0,
    left: `${Math.random() * window.screen.width}px`,
    width: `8px`,
    height: `8px`,
    borderRadius: `50%`,
    backgroundColor: `#fff`,
    opacity: Math.random(),
    animation: `fall 10s linear`
  }

  return (
    <>
      <div
        className="snowflake"
        style={snowStyle}/>
    </>
  )
}

export default Snowflake
