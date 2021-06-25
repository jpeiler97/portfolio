import React from 'react';

function Project({ title, gitLink, projectLink, image, imageAlt }) {
	return (
		// <div className="app-card">
		// 	<a href={projectLink} target="_blank">
		// 		<img src={image} href={imageAlt} />
		// 	</a>
		// 	<div id="app-tag">{title}</div>
		// 	<div id="repo-link">
		// 		<a href={gitLink} target="_blank">
		// 			Github Repo
		// 		</a>
		// 	</div>
		// </div>
		<div className="app-area">
			<div className="app-title">{title}</div>
			<div className="app-info">
				<div className="repo">
					<a href={gitLink} target="_blank">
						Github Repo
					</a>
				</div>
				<div className="deploy">
					<a href={projectLink} target="_blank">
						Deployed App
					</a>
				</div>
				<img src={image} href={imageAlt} />
			</div>
		</div>
	);
}

export default Project;
