import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'


const projectDetails = (props) => {
    // const id = props.match.params.id;
    // console.log(props);
    const {project } = props;

    if(project) {
        return (
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">{project.title}</span>
                        <p>{project.content}</p>
    
                    </div>
    
                    <div className="card-action grey lighten-4 grey-text">
                        <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
                        <div>3rd October 2020</div>
                    </div>
                </div>
            </div>
        )
    }
    else return (
        <div className="container section project-details">
            Loading Data....
        </div>
    )
}


const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects? projects[id] : null
    return {
        project : project
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection : 'projects'}
    ])
)(projectDetails);