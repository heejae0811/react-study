import {useRoutes} from 'react-router'
import App from '../App'
import CatDetail from '../pages/catDetail'
import CatCreate from '../pages/catCreate'


const Router = () => {
  const routes = useRoutes([
    {
      path: '/',
      index: true,
      element: <App/>
    },
    {
      path: '/catDetail/:name',
      element: <CatDetail/>
    },
    {
      path: '/catCreate',
      element: <CatCreate/>
    }
  ])

  return routes
}

export default Router
