import React from 'react'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import { fetchUsers } from '../state/randomUsers'
import CircularProgress from 'material-ui/CircularProgress';
const UserList = (props) => (
    <div>
        <RaisedButton
            onClick={props.onReloadClick}
            label={'Fetch'}
            primary={true}
        />
        {props.isDataLoading ? <CircularProgress style={{position:'absolute', top: '50vh', left:'50vw' }} size={80} thickness={5} /> :
            props.usersList.map(
                (user, i) => <div key={i}>
                    {user.name.first.charAt(0).toUpperCase() + user.name.first.slice(1)}
                    <span> {user.name.last} </span>
                </div>
            )
        }
    </div>
)

const mapStateToProps = state => ({
    usersList: state.randomUsers.usersList,
    isDataLoading: state.randomUsers.isDataLoading
})


const mapDispatchToProps = dispatch => ({
    onReloadClick: () => dispatch(fetchUsers())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserList)