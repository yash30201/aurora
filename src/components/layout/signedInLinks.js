import React from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';


const SignedInLinks = (props) => {
    return(
        <ul className="right">
            <li><NavLink to='/create'>New Project</NavLink></li>
            <li><a href = '/' onClick = {props.signOut}>Log out</a></li>
            <li><NavLink to='/' className='btn btn-floating cyan lightern-1'>{props.profile.initials}</NavLink></li>
        </ul>
    );
}

const mapDispatchToProps = (dispatch) => {
    // console.log('trying to sign out in dispatch');
    return {
        signOut : () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);