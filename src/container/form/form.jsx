import { useState } from "react"

const Form = (props) => {

    // Props
    const { onAddTask } = props

    // State
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [priority, setPriority] = useState("normal")

    const handleSubmit = (e) => {
        e.preventDefault()
        onAddTask(name, description, priority)
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Ajouter une nouvelle tâche</h1>
            <div>
                <label>Nom</label>
                <input type="text" value={name}
                    onChange={e => setName(e.target.value)}/>
            </div>
            <div>
                <label>Description</label>
                <input type="text" value={description}
                    onChange={e => setDescription(e.target.value)}></input>
            </div>
            <div>
                <label>Priorité</label>
                <select value={priority}
                    onChange={e => setPriority(e.target.value)}>
                    <option value="faible">Faible</option>
                    <option value="normal">Normal</option>
                    <option value="urgent">Urgent</option>
                </select>
            </div>
            <div>
                <input type="submit"></input>
            </div>
        </form>
    )
}

export default Form