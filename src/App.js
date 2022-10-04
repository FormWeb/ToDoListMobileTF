import logo from './logo.svg';
import './App.css';
import Form from './container/form/form';
import { useEffect, useState } from 'react';
import {nanoid} from "nanoid"
import TodoList from './container/todo-list/todo-list';

function App() {

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    console.log("Je nais")
  }, [tasks])

  const addTask = (name, description, priority) => {
    const newTask = {
      id: nanoid(),
      name: name,
      description: description,
      priority: priority,
      isDone: false
    }
    console.log(newTask)
    setTasks(valeurActuelle => [...valeurActuelle, newTask])
  }

  const deleteTask = (id) => {
    console.log(id)
    setTasks(
      currentValue => currentValue.filter(
        elem => elem.id !== id
      )
    )
  }

  const finishTask = (id) => {
    console.log(id)
    setTasks(
      currentValue => currentValue.map(
        elem => elem.id === id ? {...elem, isDone: true} : elem
      )
    )
  }

  // const tab = [1, 2, 3, 4, 2]
  // const tab2 = [...tab, 5]
  // const tabFilter = tab.filter(elem => elem !== 2)
  // const tabMap = tab.map(elem => elem)

  return (
    <div className="App">
      <Form onAddTask={addTask}></Form>
      <TodoList tasks={tasks}
        onDelete={deleteTask}
        onFinish={finishTask}></TodoList>
    </div>
  );
}

export default App;
