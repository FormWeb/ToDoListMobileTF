import logo from './logo.svg';
import './App.css';
import Form from './container/form/form';
import { useState } from 'react';
import {nanoid} from "nanoid"

function App() {

  const [tasks, setTasks] = useState([])

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

  // const tab = [1, 2, 3, 4]
  // const tab2 = [...tab, 5]

  return (
    <div className="App">
      <Form onAddTask={addTask}></Form>
      
    </div>
  );
}

export default App;
