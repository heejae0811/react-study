import {useRoutes} from 'react-router'
import App from '../App'
import Login from '../pages/login'
import MyPage from '../pages/mypage'
import CatCreate from '../pages/catCreate'
import CatList from '../pages/catList'
import CatDetail from '../pages/catDetail'

const Router = () => {
  const routes = useRoutes([
    {
      path: '/react-study',
      index: true,
      element: <App/>
    },
    {
      path: '/login',
      element: <Login/>
    },
    {
      path: '/mypage',
      element: <MyPage/>
    },
    {
      path: '/catCreate',
      element: <CatCreate/>
    },
    {
      path: '/catList',
      element: <CatList/>
    },
    {
      path: '/catDetail/:name',
      element: <CatDetail/>
    },
  ])

  return routes
}

export default Router
