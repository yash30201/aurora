import React from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks from './signedInLinks';
import SignedOutLinks from './signedOutLinks';
import {connect} from 'react-redux';

const Navbar = () => {
    return(
        <nav className="nav-wrapper grey darken-3">
            <Link to='/' className = "brand-logo">Aurora</Link>
            <SignedInLinks />
            <SignedOutLinks/>
        </nav>
    );
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        auth : state.firebase.auth
    }
}

export default connect(mapStateToProps)(Navbar);