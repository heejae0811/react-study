import {Routes, Route} from 'react-router-dom'
import {useSelector} from 'react-redux'
import { Helmet } from 'react-helmet-async'
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
            <Helmet>
                <title>React 고양이 키우기</title>
                <meta name="description" content="나만의 고양이를 키워보세요." data-react-helmet="true"/>

                <meta property="og:type" content="website"/>
                <meta property="og:title" content="React 고양이 키우기"/>
                <meta property="og:site_name" content="React 고양이 키우기"/>
                <meta property="og:description" content="나만의 고양이를 키워보세요."/>
                <meta property="og:image" content="https://heejae0811.github.io/react-study/meta.jpg"/>
                <meta property="og:url" content="https://heejae0811.github.io/react-study"/>
            </Helmet>

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