import { useRoutes } from 'react-router'
import App from '../App'
import CatDetail from '../pages/catDetail'


const Router = () => {
  const routes = useRoutes([
    {
      path: '/',
      index: true,
      element: <App />
    },
    {
      path: '/catDetail/:name',
      element: <CatDetail />,
    }
  ])

  return routes
}

export default Router
