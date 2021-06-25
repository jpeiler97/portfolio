import React, { useState } from 'react';
import Project from '../Project';
import projects from '../../projects.json';

function ProjectPage() {
	const [ state, setProjectState ] = useState({
		projectIndex: 0
	});

	//Changes the index passed into the project component based on if a user clicks next or previous
	function changeIndex(event) {
		event.preventDefault();

		//Will decrement the projectIndex as long as the previous index will not equal -1
		//(otherwise, an error will be thrown because projects[-1] doesn't exist)
		if (event.target.innerText === 'Previous' && state.projectIndex - 1 !== -1) {
			setProjectState({
				...state,
				projectIndex: state.projectIndex - 1
			});

			//Will increment the projectIndex as long as the next index will not equal projects.length
			//(otherwise, an error will be thrown because an index equal to the array length doesn't exist)
		} else if (event.target.innerText === 'Next' && state.projectIndex + 1 !== projects.length) {
			setProjectState({
				...state,
				projectIndex: state.projectIndex + 1
			});

			//If the user clicks 'Previous' while on the first project in the array, the last project will be displayed
		} else if (event.target.innerText === 'Previous' && state.projectIndex - 1 === -1) {
			setProjectState({
				...state,
				projectIndex: projects.length - 1
			});

			//If the user clicks 'Next' while on the last project in the array, the first project will be displayed
		} else if (event.target.innerText === 'Next' && state.projectIndex + 1 === projects.length) {
			setProjectState({
				...state,
				projectIndex: 0
			});
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
