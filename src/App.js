import {useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import {ThemeProvider} from 'styled-components'
import {darkTheme, lightTheme} from './component/theme/Theme'
import GlobalStyle from './component/theme/GlobalStyle'
import MainPage from './pages/main/index'
import TodoPage from './pages/todo/index'
import PropsPage from './pages/props/index'
import SnowPage from './pages/snow/index'
import Header from './component/layout/Header'
import Footer from './component/layout/Footer'
import ThemeButton from './component/theme/ThemeButton'
import Snow from './component/snow/Snow'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyle/>

        <Snow/>

        <Header/>

        <ThemeButton setIsDarkMode={setIsDarkMode}/>

        <Routes isDarkMode={isDarkMode}>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/todo" element={<TodoPage/>}/>
          <Route path="/props" element={<PropsPage/>}/>
          <Route path="/snow" element={<SnowPage/>}/>
        </Routes>

        <Footer/>
      </ThemeProvider>
    </>
  )
}

export default App
