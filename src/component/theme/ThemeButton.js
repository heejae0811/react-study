import './ThemeButton.scss'

function ThemeButton({setIsDarkMode}) {
  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev)
  }

  return (
    <>
      <button
        className="themeButton"
        onClick={toggleDarkMode}>
        테마변경
      </button>
    </>
  )
}

export default ThemeButton
