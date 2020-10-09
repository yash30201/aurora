import React from 'react';
import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom';


const ProjectList = ({ projects }) => {
    // console.log(projects);
    if(projects==null) return <div className="center">Loading......</div>
    return (
        <div className="project-list section">
            {projects && projects.map(project => {
                return (
                    <Link to={'/project/' + project.id} key = {project.id}>
                        <ProjectSummary project={project} />
                    </Link>
                )
            })}
        </div>
    )
}

export default ProjectList;