import { useState } from "react"
import "./Modal.css"



interface ModalInteface {
    text: string,
    input: boolean,
    btnText: string,
    newTaskHandle: any,
    changeModal: any
}


export default function Modal( {text, input, btnText, newTaskHandle, changeModal}: ModalInteface ) {
    const [task, setTask] = useState("")

    const clickModalHandle = () => {
        newTaskHandle(task)
        changeModal()
    }

    return(
        <div className="modal-bg">
            <div className="modal">
                <h2 className="modalText">{text}</h2>
                {input &&
                <div className="form__group field">
                    <input onChange={(e) => setTask(e.target.value)} id="modal-input" type="input" className="form__field" placeholder="Tarefa: " />
                    <label htmlFor="name" className="form__label">Tarefa: </label>
                </div>
                }
                <button className="modal-btn" onClick={() => clickModalHandle()}>{btnText}</button>
            </div>
        </div>
    )
}