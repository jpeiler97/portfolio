import React from 'react';

function Project({ title, gitLink, projectLink, image, imageAlt, description }) {
	return (
		<div className="app-container">
			<div className="app-title">{title}</div>
			<hr />
			<div className="app-info">
				<div className="app-links">
					<div className="repo">
						<a href={gitLink} target="_blank" rel="noreferrer">
							Github Repo
						</a>
					</div>
					<div className="deploy">
						<a href={projectLink} target="_blank" rel="noreferrer">
							Deployed App
						</a>
					</div>
					<hr />
					<div className="description">{description}</div>
				</div>

				<img src={image} alt={imageAlt} />
			</div>
		</div>
	);
}

export default Project;
