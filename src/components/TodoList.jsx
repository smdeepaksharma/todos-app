import React, { useState } from "react"
import List from '@material-ui/core/List';
import Todo from "./Todo"

const TodoList = props => {

    const [todos, setTodos] = useState([{id: 1, title: 'Complete react project', isCompleted: false}])

    return <List>
        {todos.map((todo, index) => {
            return <Todo todo={todo} handleToggle={() => {}}/>
        })}
    </List>

}

export default TodoList