import {Routes, Route} from 'react-router-dom'
import MainPage from './pages/main/index'
import TodoPage from './pages/todo/index'
import PropsPage from './pages/props/index'
import Header from './component/layout/Header'
import Footer from './component/layout/Footer'

function App() {
  return (
    <div>
      <Header/>

      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/todo" element={<TodoPage/>} />
        <Route path="/props" element={<PropsPage/>} />
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
