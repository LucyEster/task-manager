import './App.css'
import TaskList from "./components/TaskList/TaskList"
import Button from "./components/Button/Button"

import { createContext, useEffect, useState } from 'react'
import AddTaskForm from './components/forms/AddTaskForm/AddTaskForm';
import { fetchTasks } from './services/requests';

export const ViewContext = createContext(null);

function App() {
  const LOCAL_STORAGE_KEY = 'tasks';

  const [showAddTaskForm, setShowAddTaskForm] = useState(false)
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []
  })

  useEffect(() => {
    if (!tasks || tasks?.length == 0) {
      fetchTasks().then((data) => setTasks(data))
    }

  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
    console.log(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)))
  }, [tasks])


  return (

    <ViewContext.Provider
      value={{
        setShowAddTaskForm,
        tasks,
        setTasks
      }}>
      <h1>Task Manager</h1>
      <Button
        handleFunc={() => setShowAddTaskForm(true)}
        id={1}
        className="NewItemButton"
        icon="fa-solid fa-plus"
        text="Create new task"
      />
      <AddTaskForm active={showAddTaskForm} />
      <TaskList />
    </ViewContext.Provider>
  )
}

export default App
