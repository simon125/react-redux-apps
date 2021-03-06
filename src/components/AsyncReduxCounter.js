import React from 'react'
import { connect } from 'react-redux'
import asyncReduxCounter, { inc, dec } from '../state/asyncReduxCounter'
import LoadingIndicator from '../UI/LoadingIndicator';

const AsyncReduxCounter = (props) => (
    
    props.asyncCounterValue === null ?
    <LoadingIndicator />
    :
    <div>
        <h1>
            {props.asyncCounterValue}
        </h1>
        <button onClick={props.onIncClick}> + </button>
        <button onClick={props.onDecClick}> - </button>
    </div>
)
const mapStateToProps = state => ({
    asyncCounterValue: state.asyncReduxCounter.asyncCounterValue
})
const mapDispatchToProps = dispatch => ({
    onIncClick: () => dispatch(inc()),
    onDecClick: () => dispatch(dec())
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AsyncReduxCounter)