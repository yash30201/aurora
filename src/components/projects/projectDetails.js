import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Link, Redirect } from 'react-router-dom'
import moment from 'moment'

const projectDetails = (props) => {
    // const id = props.match.params.id;
    // console.log(props);
    const { project, projectId, auth } = props;
    if (!auth.uid) return <Redirect to='/signin' />
    if (project) {
        return (
            <div className="container section project-details">
                
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">{project.title}</span>
                        <p>{project.content}</p>

                    </div>

                    <div className="card-action grey lighten-4 grey-text">
                        <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
                        <div>{moment(project.createdAt.toDate()).calendar()}</div>
                    </div>
                </div>

                {
                    project.authorId === auth.uid ?
                        <Link to={'/update/' + projectId} key={projectId}>
                            <div className="btn blue lghten-1 z-depth-0" >Edit this article</div>
                        </Link> :
                        <div></div>
                }
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
    
    const project = projects ? projects[id] : null
    return {
        projectId: id,
        project: project,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(projectDetails);