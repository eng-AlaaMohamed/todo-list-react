import { useRef, useState } from 'react';
import './App.css';

function App() {

  const [todos, setTodos] = useState([]);
  const inputRef = useRef("");

  function handelClickToButton() {
    const todosText = inputRef.current.value;
    const newItem = { completed: false, todosText };
    setTodos([...todos, newItem]);
    inputRef.current.value = "";
  }

  function handelClickUptask(index) {
    let newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed
    setTodos(newTodos);
  }

  function handelClickToDeleteTask(index) {
    let newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <h1 className='todo-title'>Todo List</h1>
      <ul className='task-list'>
        {todos.length === 0 ? <li className='not-found-tasks'>not found tasks</li>
          :
          todos.map(({ todosText, completed }, index) => {
            return <div key={index} className='task'>
              <li className={completed ? "done" : ""} onClick={() => handelClickUptask(index)}>{todosText}</li>
              <span onClick={() => handelClickToDeleteTask(index)} className='delete-task'>❌</span>
            </div>
          })
        }
      </ul>
      <input className='input' placeholder='Enter Task...' ref={inputRef} />
      <button className='btn' onClick={handelClickToButton}>add</button>
    </div>
  );
}

export default App;
