import {useState} from 'react'
import './index.scss'

function TodoPage() {
  const [toDo, setToDo] = useState('')
  const [toDos, setToDos] = useState([])
  const sortTodos = [...toDos]

  const onChange = (event) => {
    setToDo(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()

    if (toDo === '') {
      return
    }

    setToDos(currentArray => [toDo, ...currentArray])
    setToDo('')
  }

  // 오름차순 정렬
  const asceSort = () => {
    setToDos(sortTodos.sort((a, b) => a.localeCompare(b)))
  }

  // 내림차순 정렬
  const descSort = () => {
    setToDos(sortTodos.sort((a, b) => -a.localeCompare(b)))
  }


  return (
    <div className="todo-page">
      <h1>My To Dos({toDos.length})</h1>

      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Write your to do.."
          value={toDo}
          onChange={onChange}/>
        <button>Add To Do</button>
      </form>

      <button onClick={asceSort}>오름차순 정렬</button>
      <button onClick={descSort}>내림차순 정렬</button>

      <ul>
        {
          toDos.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default TodoPage
