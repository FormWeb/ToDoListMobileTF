import style from "./todo-list.module.css"

const TodoListItem = (props) => {

    const { id, name, description, priority, isDone } = props
    const { onDeleteTask, onFinishTask } = props

    const stylePriority = priority === "urgent" ? style.red : ""


    const handleDelete = () => {
        onDeleteTask(id)
    }

    return (
        <div className={style.container}>
            <div>
                <h3>{name}</h3>
                <p>{description}</p>
                { priority === "urgent" && <p className={stylePriority}>{priority}</p> }
                <p>{isDone.toString()}</p>
            </div>
            <div className={style.buttonContainer}>
                <button onClick={() => onFinishTask(id)}>Terminer</button>
                <button onClick={handleDelete}>Supprimer</button>
            </div>
        </div>
    )
}

export default TodoListItem