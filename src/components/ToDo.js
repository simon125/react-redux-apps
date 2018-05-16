import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { add, del, newTaskTextChanged  } from '../state/todos'
import { RaisedButton, TextField,Paper } from 'material-ui';




const ToDo = (props) => (
    <div>
        <Paper>
            <TextField
                fullWidth={true}
                placeholder={'type tasks'}
                onChange={ props.onNewTaskTextChanged}

                
            />
            <RaisedButton
            label={'add task'}
            secondary={true}
            onClick={()=>props.addTaskHandler}
            />
        </Paper>
        {
            props.tasks.map((task, i) => (// własciwiości obiektu to nazwy propsów
                <li>
                    {task.text}
                    <RaisedButton
                        primary={true}
                        label={'delete'}
                        onClick={() => props.deleteTaskHandler(i)}
                    />
                </li>
            ))
        }
    </div>
)

const mapStateToProps = state => ({
    tasks: state.todos.tasks,// własciwiości obiektu to nazwy propsów
    newTaskText: state.todos.newTaskText
})

const mapDispatchToProps = dispatch => ({
    deleteTaskHandler: (i) => dispatch(del(i)),
    addTaskHandler: () => dispatch(add()),
    onNewTaskTextChanged: (event, value) => dispatch(newTaskTextChanged(value))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDo)