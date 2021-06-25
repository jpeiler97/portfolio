import React, { useState } from 'react';
import Project from '../Project';
import projects from '../../projects.json';

function ProjectPage() {
	const [ state, setProjectState ] = useState({
		projectIndex: 0
	});

	function changeIndex(event) {
		event.preventDefault();
		console.log(projects.length);
		if (state.projectIndex <= projects.length - 1 && state.projectIndex >= 0) {
			console.log('something');
			if (event.target.innerText === 'Previous' && state.projectIndex - 1 !== -1) {
				setProjectState({
					...state,
					projectIndex: state.projectIndex - 1
				});
			} else if (event.target.innerText === 'Next' && state.projectIndex + 1 !== projects.length) {
				setProjectState({
					...state,
					projectIndex: state.projectIndex + 1
				});
			} else if (event.target.innerText === 'Previous' && state.projectIndex - 1 === -1) {
				setProjectState({
					...state,
					projectIndex: 5
				});
			} else if (event.target.innerText === 'Next' && state.projectIndex + 1 === projects.length) {
				setProjectState({
					...state,
					projectIndex: 0
				});
			}
		}
	}

	return (
		<section className="app-section" id="app-section">
			<div id="section-title">What have I made?</div>
			{state.projectIndex + 1} of 6
			<button onClick={changeIndex}>Next</button>
			<button onClick={changeIndex}>Previous</button>
			<Project
				title={projects[state.projectIndex].title}
				gitLink={projects[state.projectIndex].gitLink}
				projectLink={projects[state.projectIndex].projectLink}
				image={projects[state.projectIndex].image}
				imageAlt={projects[state.projectIndex].imageAlt}
			/>
		</section>
	);
}

export default ProjectPage;
