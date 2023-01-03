const Snowflake = ({active}) => {
  const whiteSnowStyle = {
    left: `${Math.random() * window.screen.width}px`,
    // backgroundColor: `blue`,
    opacity: Math.random(),
    animation: `fall 10s linear infinite`,
    animationDelay: `${(Math.random() * 15)}s`
  }

  const blackSnowStyle = {
    left: `${Math.random() * window.screen.width}px`,
    // backgroundColor: `red`,
    opacity: Math.random(),
    animation: `fall 10s linear infinite`,
    animationDelay: `${(Math.random() * 15)}s`
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
