import React from 'react'
import ReactDOM from 'react-dom'
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper'

import { connect } from 'react-redux'
import {inc, dec} from '../state/counter'

const styles = { padding: '10px', textAlign: 'center', }

const Counter = (props) => (
    <div>
        <Paper>
            <h1 style={styles}>{props.counterValue}</h1>
        </Paper>
        <div style={styles}>
            <Paper>
                <RaisedButton
                    label={`-`}
                    secondary={true}
                    style={{ margin: '20px' }}
                    onClick={props.onDecHandler}
                />
                <RaisedButton
                    label={`+`}
                    primary={true}
                    style={{ margin: '20px' }}
                    onClick={props.onIncHandler}
                />
            </Paper>
        </div>
    </div>
)


const mapStateToProps = state => ({

    counterValue: state.counter

})

const mapDispatchToProps = dispatch => ({
    onDecHandler: () => dispatch(dec()),
    onIncHandler: () => dispatch(inc())
})

export default connect(

    mapStateToProps,
    mapDispatchToProps

)(Counter)

