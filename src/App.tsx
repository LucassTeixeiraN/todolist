import Task from "./components/Task/Task"
import AddBtn from "./components/AddButton/AddBtn"
import Modal from "./components/Modal/Modal"

import "./App.css"
import { useEffect, useState } from "react"

export default function App() {

    type Task = {
        id: number;
        text: string;
        priority: string;
    }

    const [modalHandle, setModalHandle] = useState(false)
    const [newTask, setNewTask] = useState("")
    const [tasksAmount, setTasksAmount] = useState(0)
    const [currentTaskId, setCurrentTaskId] = useState(0)
    const [tasks, setTasks] = useState<Task[]>([])


    const idHandle = () => {
        setCurrentTaskId(currentTaskId + 1)
    }

    const changeModal = () => {
        if (modalHandle) {
            setModalHandle(false)
        } else {
            setModalHandle(true)
        }
    }

    const newTaskHandle = (task: Task) => {
        setTasks(prevTasks => [...prevTasks, task])
    }

    const task = tasks.map((el) => <Task task = {el}/>)

    useEffect(()=> {
        task
    }, [tasks])

    return(
        <>
            <div className="tasks">
                <AddBtn changeModal={changeModal}/>
                {task}
                {modalHandle && <Modal text={"Criar Tarefa"} input={true} btnText="Criar" newTaskHandle={newTaskHandle} changeModal={changeModal} currentTaskId={currentTaskId} idHandle= {idHandle}/>}

            </div>
        </>
    )
}