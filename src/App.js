import {Routes, Route} from 'react-router-dom'
import {useSelector} from 'react-redux'
import Login from './pages/login'
import MyPage from './pages/mypage'
import CatCreate from './pages/catCreate'
import CatList from './pages/catList'
import CatDetail from './pages/catDetail'
import Error from './pages/error'
import Layout from './component/layout/Layout'
import './index.css'

function App() {
    const loginUser = useSelector(state => state.user.loginUser)

    return (
        <>
            <Layout>
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
            </Layout>
        </>
    )
}

export default App