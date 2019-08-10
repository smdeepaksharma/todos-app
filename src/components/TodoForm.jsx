import React, { useState } from "react"
import TextField from "@material-ui/core/TextField"

const TodoForm = ({ addTodo }) => {

    const [value, setValue] = useState("")

    function handleSubmit(event) {
        event.preventDefault();
        if (!value) return;
        addTodo({title: value, isCompleted: false})
        setValue("")
    }

    return <form onSubmit={handleSubmit}>
        <TextField
            id="standard-name"
            label="To do:"
            fullWidth
            value={value}
            onChange={(e) => setValue(e.target.value)}
            margin="normal"
        />
    </form>
}

export default TodoForm