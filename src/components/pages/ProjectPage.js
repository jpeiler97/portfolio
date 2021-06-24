import React, { useState } from 'react';
import Project from '../Project';
function ProjectPage({ title, gitLink, projectLink, image, imageAlt }) {
	const [ projectState, setProjectState ] = useState({
		projectList: [],
		projectIndex: 0,
		title: '',
		gitLink: '',
		projectLink: '',
		image: '',
		imageAlt: ''
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
