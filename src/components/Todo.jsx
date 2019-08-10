import React from "react"
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Close from '@material-ui/icons/Close';
 
const Todo = ({ todo, handleToggle, removeTodo}) => {

    const { id, title, isCompleted } = todo

    return <ListItem key={id} role={undefined} dense button onClick={() => handleToggle(id)}>
        <ListItemIcon>
            <Checkbox
                edge="start"
                checked={isCompleted}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': title }}
            />
        </ListItemIcon>
        <ListItemText id={id} primary={title} style={{ textDecoration: isCompleted ? 'line-through':'none'}}/>
        <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="comments">
                <Close onClick={() => removeTodo(id)}/>
            </IconButton>
        </ListItemSecondaryAction>
    </ListItem>
}


export default Todo