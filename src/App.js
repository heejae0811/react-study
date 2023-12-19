import {useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import {ThemeProvider} from 'styled-components'
import {darkTheme, lightTheme} from './component/theme/Theme'
import GlobalStyle from './component/theme/GlobalStyle'
import {useUserState} from './context/UserContext'
import Header from './component/layout/Header'
import Footer from './component/layout/Footer'
import ThemeButton from './component/theme/ThemeButton'
import LoginPage from './pages/login/index'
import MyPage from './pages/mypage/index'
import IntroPage from './pages/intro/index'
import PropsPage from './pages/props/index'
import SnowPage from './pages/snow/index'
import TodoPage from './pages/todo/index'

function App() {
  const {user} = useUserState()
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyle/>
        {/*<Snow/>*/}
        <ThemeButton setIsDarkMode={setIsDarkMode}/>

        <Header/>

        {user ? (
          <Routes isDarkMode={isDarkMode}>
            <Route path="/intro" element={<IntroPage/>}/>
            <Route path="/props" element={<PropsPage/>}/>
            <Route path="/snow" element={<SnowPage/>}/>
            <Route path="/todo" element={<TodoPage/>}/>
            <Route path="/mypage" element={<MyPage/>}/>
          </Routes>
        ) : (
          <Routes isDarkMode={isDarkMode}>
            <Route path="/" element={<LoginPage/>}/>
          </Routes>
        )}

        <Footer/>
      </ThemeProvider>
    </>
  )
}

export default App