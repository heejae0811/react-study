import {Routes, Route} from 'react-router-dom'
import MainPage from './pages/main/index'
import ProjectPage from './pages/project/index'
import StudyPage from './pages/study/index'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/project" element={<ProjectPage/>} />
        <Route path="/study" element={<StudyPage/>} />
      </Routes>
    </div>
  );
}

export default App;
