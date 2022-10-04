import TodoListItem from "./todo-list-item"

const TodoList = (props) => {

    // Props
    const { tasks } = props
    const { onDelete, onFinish } = props

    const handleDeleteTask = (id) => {
        onDelete(id)
    }

    const taskJSX = tasks.map(
        elem => <TodoListItem key={elem.id} {...elem}
                onDeleteTask={handleDeleteTask}
                onFinishTask={onFinish}></TodoListItem>
    )

    return (
        <ul>
            {taskJSX}
        </ul>
    )
}

export default TodoList