import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateProject } from '../../store/actions/projectActions'
import { Redirect } from 'react-router-dom'


class UpdateProject extends Component {
    state = {
        title: '',
        content: ''
    }
    

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    updateMyState = () => {
        this.setState({
            title : this.props.project.title,
            content : this.props.project.content
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state, this.props.projectId);
        const myvar = [this.state, this.props.projectId];
        this.props.updateProject(myvar);
        this.props.history.push('/');
    }

    render() {
        const { auth, project } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />
        if(project){
            if(this.state.title.length === 0) this.updateMyState();
        }
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Update Project</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" value = {this.state.title} onChange={this.handleChange} />
                    </div>

                    <div className="input-field">
                        <label htmlFor="content">Content</label>
                        <textarea id="content" className="materialize-textarea" value={this.state.content} onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <div className="btn blue lghten-1 z-depth-0" onClick={this.handleSubmit}>Update</div>
                    </div>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null;
    return {
        project: project,
        projectId: id,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateProject: (project) => dispatch(updateProject(project))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UpdateProject);
