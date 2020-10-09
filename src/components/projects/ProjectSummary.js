import React from 'react';

const ProjectSummary = ({project}) => {
    return (
        <div className="project-summary card">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{project.title}</span>
                    <p>Posted by {project.authorFirstName}</p>
                <p className="grey-text">9th October 7:00pm</p>
            </div>
        </div>
    );
}


export default ProjectSummary