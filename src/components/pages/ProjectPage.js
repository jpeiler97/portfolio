import React, { useState } from 'react';
import Project from '../Project';
import projects from '../../projects.json';

function ProjectPage() {
	const [ projectState, setProjectState ] = useState({
		projectList: projects,
		projectIndex: 0,
		title: projects[0].title,
		gitLink: projects[0].gitLink,
		projectLink: projects[0].projectLink,
		image: projects[0].image,
		imageAlt: projects[0].imageAlt
	});

	return (
		<section className="app-section" id="app-section">
			<div id="section-title">What have I made?</div>
			<Project
				title={projectState.title}
				gitLink={projectState.gitLink}
				projectLink={projectState.projectLink}
				image={projectState.image}
				imageAlt={projectState.imageAlt}
			/>
		</section>
	);
}

export default ProjectPage;
