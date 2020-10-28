import React from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks from './signedInLinks';
import SignedOutLinks from './signedOutLinks';
import {connect} from 'react-redux';
import Logo from '../../assets/blogLogo.png'

const Navbar = (props) => {
    const {auth, profile} = props;
    // console.log(auth);
    const links = auth.uid? <SignedInLinks profile = {profile}/> : <SignedOutLinks />;
    return(
        <nav className="nav-wrapper grey darken-3">
            <Link to='/' className = "brand-logo">
                <img className = "blog-logo" src={Logo} alt="AURORA" width = {70} height = {70} mode = 'fit'/>
            </Link>
            {links}
        </nav>
    );
}

const mapStateToProps = (state) => {
    // consolelog(state);
    return {
        auth : state.firebase.auth,
        profile : state.firebase.profile,
    }
}

export default connect(mapStateToProps)(Navbar);