import './index.scss'

function SnowPage() {
  const body = document.querySelector('body')

  const  makeSnowflake = () => {
    const snowflake = document.createElement('div')
    const delay = Math.random() * 10
    const initialOpacity = Math.random()
    const MIN_DURATION = 10
    const duration = Math.random() * 20 + MIN_DURATION

    snowflake.classList.add('snowflake')
    snowflake.style.left = `${Math.random() * window.screen.width}px`
    snowflake.style.animationDelay = `${delay}s`
    snowflake.style.opacity = initialOpacity
    snowflake.style.animation = `fall ${duration}s linear`

    body.appendChild(snowflake)

    setTimeout(() => {
      body.removeChild(snowflake)
      makeSnowflake()
    }, (duration + delay) * 1000)
  }

  for(let index = 0; index < 50; index++) {
    setTimeout(makeSnowflake, 500 * index)
  }

  return (
    <div className="snow-page">
      <div className="snowflake"></div>
    </div>
  )
}

export default SnowPage
