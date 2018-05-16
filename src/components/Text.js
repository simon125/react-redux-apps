import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { addText } from '../state/text'
import { RaisedButton, TextField, Paper } from 'material-ui';

const Text = (props) => (
    <Paper>
        <h1>{props.textH}</h1>
        <TextField
            fullWidth={true}
            placeholder={'type tasks'}
            onChange={props.addTextHandler}
        />
        
    </Paper>
)

const mapStateToProps = state => ({
    textH: state.text
})
const mapDispatchToProps = dispatch => ({
    addTextHandler: (e, v) => dispatch(addText(v))
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Text)