import React from "react";
import { connect } from "react-redux";
import { authClear } from "../../actions";

const UserList = (props) => {
    
    const {users, authClearAction} = props;
    
    const mapUser = ({id, password, emailUser, isFetching}, index) => {
        const del = () => {
            authClearAction(id);
        }
        return(
            <li key={id}>
                ID {id} . password:{password} email: {emailUser} isFetching: {isFetching}
                <input type="checkbox" checked={isFetching} />
                <button onClick={del}>Delete user</button>
            </li>
        );
    };
    return <ul>{users.map(mapUser)}</ul>;
}

const mapStateToProps = (state) => state.userReducerStates;

const mapDispatchToProps = (dispatch) => {
    return{
        authClearAction: id => {
            dispatch(authClear(id));
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);