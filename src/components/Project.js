import React from 'react';

function Project({ title, gitLink, projectLink, image, imageAlt }) {
	return (
		<div className="app-area">
			<div className="app-title">{title}</div>
			<hr />
			<div className="app-info">
				<div className="app-links">
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
					<hr />
					<div className="description">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque, magna eget rutrum
						laoreet, libero nisl tincidunt eros, sit amet porttitor purus justo in ex. Fusce feugiat at erat
						quis aliquet. Integer interdum nunc et est malesuada iaculis. Sed turpis sem, interdum non
						placerat quis, ornare a sem.
					</div>
				</div>

				<img src={image} href={imageAlt} />
			</div>
		</div>
	);
}

export default Project;
