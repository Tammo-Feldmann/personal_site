import React from 'react';

const { Component } = React;

class ProjectCard extends Component {
  render() {
    const { title, excerpt } = this.props;

    return (
      <div className="project-card" style={{margin: `1.5rem`, padding: `2rem 0rem 0rem 0rem`}}>
          <h2 className="card-header">
            {title}
          </h2>
          <div className="card-body" style={{maxWidth: `25rem`}}>
            {excerpt}
          </div>
      </div>
    );
  }
};

export default ProjectCard;