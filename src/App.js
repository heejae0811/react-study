// import GlobalStyle from './style/GlobalStyle'
// import {useRoutes} from 'react-router'

import {Routes, Route} from 'react-router-dom'
import {useSelector} from 'react-redux'
import Login from './pages/login'
import MyPage from './pages/mypage'
import CatCreate from './pages/catCreate'
import CatList from './pages/catList'
import CatDetail from './pages/catDetail'
import Error from './pages/error'
import Header from './component/layout/Header'
import './app.scss'

function App() {
  const loginUser = useSelector(state => state.user.loginUser)

  return (
    <>
      <Header/>

      {
        loginUser !== null ? (
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/react-study" element={<Login/>}/>
            <Route path="/mypage" element={<MyPage/>}/>
            <Route path="/catCreate" element={<CatCreate/>}/>
            <Route path="/catList" element={<CatList/>}/>
            <Route path="/catDetail/:name" element={<CatDetail/>}/>
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/react-study" element={<Login/>}/>
            <Route path="/mypage" element={<Error/>}/>
            <Route path="/catCreate" element={<Error/>}/>
            <Route path="/catList" element={<Error/>}/>
            <Route path="/catDetail/:name" element={<Error/>}/>
          </Routes>
        )
      }
    </>
  )
}

export default App