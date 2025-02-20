import Task from "./components/Task/Task"
import AddBtn from "./components/AddButton/AddBtn"
import Modal from "./components/Modal/Modal"

import "./App.css"
import { useEffect, useState } from "react"

export default function App() {

    type Task = {
        id: number;
        text: string;
        priority: number;
    }

    const [modalHandle, setModalHandle] = useState(false)
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

    const deleteTask = (id: number) => {
        for(const task of tasks) {
            if(task.id == id) {
                setTasks(prevTasks => prevTasks.filter(t => t.id !== task.id))
            }
        }
    } 

    const newTaskHandle = (task: Task) => {
        setTasks(prevTasks => [...prevTasks, task])
    }

    const task = tasks.map((el) => <Task key={el.id} task = {el} deleteTask={deleteTask}/>)

    useEffect(()=> {
        task
        console.log(tasks);
        
    }, [tasks])

    return(
        <>
            <AddBtn changeModal={changeModal}/>
            <div className="tasks">
                    {task}
            </div>
            {modalHandle && <Modal text={"Criar Tarefa"} input={true} btnText="Criar" newTaskHandle={newTaskHandle} changeModal={changeModal} currentTaskId={currentTaskId} idHandle= {idHandle}/>}
        </>
    )
}