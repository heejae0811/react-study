import {Routes, Route} from 'react-router-dom'
import MainPage from './pages/main/index'
import ProjectPage from './pages/project/index'
import StudyPage from './pages/study/index'
import Header from './component/layout/Header'
import Footer from './component/layout/Footer'

function App() {
  return (
    <div>
      <Header/>

      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/project" element={<ProjectPage/>} />
        <Route path="/study" element={<StudyPage/>} />
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
