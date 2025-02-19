import { useState } from "react"
import "./Modal.css"
type Task = {
    id: number;
    text: string;
    priority: string;
}

interface ModalInteface {
    text: string,
    input: boolean,
    btnText: string,
    newTaskHandle: any,
    changeModal: any
    currentTaskId: number
    idHandle: any
}


export default function Modal( {text, input, btnText, newTaskHandle, changeModal, currentTaskId, idHandle}: ModalInteface ) {
    const [taskText, setTaskText] = useState("")
    const [priority, setPriority] = useState("")

    const clickModalHandle = () => {
        newTaskHandle({id: currentTaskId, text: taskText, priority: priority})
        changeModal()
        idHandle()
    }

    return(
        <div className="modal-bg">
            <div className="modal">
                <h2 className="modalText">{text}</h2>
                {input &&
                <div className="form__group field">
                    <div className="text-input">
                        <input onChange={(e) => setTaskText(e.target.value)} id="modal-input" type="input" className="form__field" placeholder="Tarefa: " />
                        <label htmlFor="name" className="form__label">Tarefa: </label>
                    </div>
                    <div className="priority-input">
                        <label className="priority-input-label">Prioridade: </label> 
                        <input onChange={(e) => setPriority(e.target.value)} id="myRange" className="slider" step={1} max={3} min={1} type="range" />
                        <div className="priority-label">
                            <p>Baixa</p>
                            <p>Média</p>
                            <p>Alta</p>
                        </div>
                    </div>
                </div>


                }
                <button className="modal-btn" onClick={() => clickModalHandle()}>{btnText}</button>
            </div>
        </div>
    )
}