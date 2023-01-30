import {useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import {ThemeProvider} from 'styled-components'
import {darkTheme, lightTheme} from './component/theme/Theme'
import GlobalStyle from './component/theme/GlobalStyle'
import LoginPage from './pages/login/index'
import MyPage from './pages/mypage/index'
import ErrorPage from './pages/error/index'
import IntroPage from './pages/intro/index'
import TodoPage from './pages/todo/index'
import PropsPage from './pages/props/index'
import SnowPage from './pages/snow/index'
import CatPage from './pages/cat/index'
import CatDetailPage from './pages/catDetail/index'
import Header from './component/layout/Header'
import Footer from './component/layout/Footer'
import ThemeButton from './component/theme/ThemeButton'
import Snow from './component/snow/Snow'
import {useAuth} from './hooks/useAuth'

function App() {
  const [userList, loginValue, isLogin, isLogout] = useAuth()
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        {/*<Snow/>*/}
        <GlobalStyle/>
        <ThemeButton setIsDarkMode={setIsDarkMode}/>
        <Header/>
        {
          loginValue.login ? (
            <Routes isDarkMode={isDarkMode}>
              <Route path="/" element={<LoginPage/>}/>
              <Route path="/intro" element={<IntroPage/>}/>
              <Route path="/todo" element={<TodoPage/>}/>
              <Route path="/props" element={<PropsPage/>}/>
              <Route path="/snow" element={<SnowPage/>}/>
              <Route path="/cat" element={<CatPage/>}/>
              <Route path="/catDetail/:id" element={<CatDetailPage/>}/>
              <Route path="/mypage" element={<MyPage/>}/>
            </Routes>
          ) : (
            <Routes isDarkMode={isDarkMode}>
              <Route path="/" element={<LoginPage/>}/>
              <Route path="/intro" element={<ErrorPage/>}/>
              <Route path="/todo" element={<ErrorPage/>}/>
              <Route path="/props" element={<ErrorPage/>}/>
              <Route path="/snow" element={<ErrorPage/>}/>
              {/*<Route path="/cat" element={<ErrorPage/>}/>*/}
              {/*<Route path="/catDetail/:id" element={<ErrorPage/>}/>*/}

              <Route path="/cat" element={<CatPage/>}/>
              <Route path="/catDetail/:id" element={<CatDetailPage/>}/>

              <Route path="/mypage" element={<ErrorPage/>}/>
            </Routes>
          )
        }
        <Footer/>
      </ThemeProvider>
    </>
  )
}

export default App