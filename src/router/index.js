import { useRoutes } from 'react-router'
import App from '../App'
import DetailCat from '../pages/catDetail'


const Router = () => {
  const routes = useRoutes([
    {
      path: '/',
      index: true,
      element: <App />
    },
    {
      path: '/cat-detail/:name',
      element: <DetailCat />,
    }
  ])

  return routes
}

export default Router
