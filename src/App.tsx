import Task from "./components/Task/Task"
import AddBtn from "./components/AddButton/AddBtn"
import Modal from "./components/Modal/Modal"

import "./App.css"
import { useEffect, useState } from "react"

export default function App() {

    const [modalHandle, setModalHandle] = useState(false)
    const [newTask, setNewTask] = useState("")
    const [tasksAmount, setTasksAmount] = useState(0)
    const [currentTaskId, setCurrentTaskId] = useState(0)

    const changeModal = () => {
        if (modalHandle) {
            setModalHandle(false)
        } else {
            setModalHandle(true)
        }
    }

    const newTaskHandle = (task: string) => {
        setNewTask(task)
    }

    useEffect(()=>{
        console.log(newTask)
    }, [newTask])

    return(
        <>
            <div className="tasks">
                <AddBtn changeModal={changeModal}/>
                <Task taskId={currentTaskId}/>
                {modalHandle && <Modal text={"Criar Tarefa"} input={true} btnText="Criar" newTaskHandle={newTaskHandle} changeModal={changeModal}/>}

            </div>
        </>
    )
}