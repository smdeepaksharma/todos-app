import React, { useState } from "react"
import List from '@material-ui/core/List';
import Todo from "./Todo"
import TodoForm from "./TodoForm";
import Paper from '@material-ui/core/Paper'

const TodoList = props => {

    const [todos, setTodos] = useState([{ id: 1, title: 'Complete react project', isCompleted: false }])

    const addTodo = todo => {
        const newTodoList = [...todos, todo]
        setTodos(newTodoList)
    }

    const completeTodo = index => {
        const newTodos = [...todos]
        newTodos[index].isCompleted = true
        setTodos(newTodos)
    }

    const removeTodo = index => {
        const newTodos = [...todos]
        newTodos.splice(index, +1)
        setTodos(newTodos)
    }

    return <React.Fragment>
        <Paper style={{margin: 40, padding: 20}}>
            <List>
                {todos.map((todo, index) => {
                    return <Todo todo={todo} handleToggle={() => { completeTodo(index) }} removeTodo={() => removeTodo(index)} />
                })}
            </List>
            <TodoForm addTodo={addTodo} />
        </Paper>
    </React.Fragment>

}

export default TodoList