const Snowflake = () => {
  const snowStyle = {
    left: `${Math.random() * window.screen.width}px`,
    opacity: Math.random(),
    animation: `fall 10s linear infinite`,
    animationDelay: `${(Math.random() * 15)}s`
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
