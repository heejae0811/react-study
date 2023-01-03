import {Routes, Route} from 'react-router-dom'
import MainPage from './pages/main/index'
import TodoPage from './pages/todo/index'
import PropsPage from './pages/props/index'
import SnowPage from './pages/snow/index'
import Header from './component/layout/Header'
import Footer from './component/layout/Footer'
import Snow from './component/snow/Snow'

function App() {
  return (
    <div>
      <Snow/>

      <Header/>

      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/todo" element={<TodoPage/>} />
        <Route path="/props" element={<PropsPage/>} />
        <Route path="/snow" element={<SnowPage/>} />
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
