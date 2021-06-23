import React from 'react';

function ProjectPage() {
	return (
		<section className="app-section" id="app-section">
			<div id="section-title">What have I made?</div>
			<section className="flex-row">
				<div className="app-card" id="other">
					<a href="https://klay824.github.io/project-1/" target="_blank">
						<img src="./assets/images/proj1Thumbnail.png" />
					</a>
					<div id="app-tag">Project: Ron's Food Finder</div>
					<div id="repo-link">
						<a href="https://github.com/klay824/project-1" target="_blank">
							Github Repo
						</a>
					</div>
				</div>
				<div className="app-card" id="other">
					<a href="https://bubbblr.herokuapp.com/dashboard" target="_blank">
						<img src="./assets/images/proj2Thumbnail.png" />
					</a>
					<div id="app-tag">Project: Bubbblrr</div>
					<div id="repo-link">
						<a href="https://github.com/davidboerm/bubbblr" target="_blank">
							Github Repo
						</a>
					</div>
				</div>
				<div className="app-card" id="other">
					<a href="https://boiling-wildwood-64656.herokuapp.com/" target="_blank">
						<img src="./assets/images/blogThumbnail.png" />
					</a>
					<div id="app-tag">The Fantastic Tech Blog</div>
					<div id="repo-link">
						<a href="https://github.com/jpeiler97/tech-blog" target="_blank">
							Github Repo
						</a>
					</div>
				</div>
			</section>
			<section className="flex-row">
				<div className="app-card" id="other">
					<a href="https://jpeiler97.github.io/weather-dashboard/" target="_blank">
						<img src="./assets/images/weatherDashThumbnail.png" alt="Hyper Break" />
					</a>
					<div id="app-tag">Weather Dashboard</div>
					<div id="repo-link">
						<a href="https://github.com/jpeiler97/weather-dashboard" target="_blank">
							Github Repo
						</a>
					</div>
				</div>
				<div className="app-card" id="other">
					<a href="https://jpeiler97.github.io/day-planner/" target="_blank">
						<img src="./assets/images/dayPlannerThumbnail.png" />
					</a>
					<div id="app-tag">Day Planner</div>
					<div id="repo-link">
						<a href="https://github.com/jpeiler97/day-planner" target="_blank">
							Github Repo
						</a>
					</div>
				</div>
				<div className="app-card" id="other">
					<a href="https://sharemygame.com/@MisterGooms/hyper-break" target="_blank">
						<img src="./assets/images/blockBreakThumbnail.png" />
					</a>
					<div id="app-tag">Hyper Break</div>
				</div>
			</section>
		</section>
	);
}

export default ProjectPage;
