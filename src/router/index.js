import {useRoutes} from 'react-router'
import App from '../App'
import IntroPage from '../pages/intro'
import TodoPage from '../pages/todo'
import PropsPage from '../pages/props'
import SnowPage from '../pages/snow'
import CatPage from '../pages/cat'
import CatDetailPage from '../pages/catDetail'

const Router = () => {
  const routes = useRoutes([
    {
      path: '/',
      index: true,
      element: <App/>
    },
    {
      path: '/intro',
      index: true,
      element: <IntroPage/>
    },
    {
      path: '/todo',
      index: true,
      element: <TodoPage/>
    },
    {
      path: '/props',
      index: true,
      element: <PropsPage/>
    },
    {
      path: '/snow',
      index: true,
      element: <SnowPage/>
    },
    {
      path: '/cat',
      index: true,
      element: <CatPage/>
    },
    {
      path: '/catDetail',
      index: true,
      element: <CatDetailPage/>
    },
  ])

  return routes
}

export default Router