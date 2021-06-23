import React from 'react';

function Bio() {
	return (
		<section class="about-section">
			<div id="about-title">What am I about?</div>
			<section class="about-flex">
				<section class="about-me">
					{/* <!-- <hr>  --> */}
					<h2>Coding History</h2>
					<div class="about-div">
						<ul>
							<li>Basic Java course in High School</li>
							<li>Self-taught HTML/CSS (Udemy)</li>
							<li>Self-taught C# for use with Unity (Udemy)</li>
							<li>Self-taught Javascript (Udemy)</li>
							<li>Currently enrolled in full-stack development bootcamp (SMU)</li>
						</ul>
					</div>
					<h2>Workplace Strengths</h2>
					<div class="about-div">
						<ul>
							<li>I put others first and see the utmost importance in teamwork.</li>
							<li>I communicate with colleaugues and clients clearly and efficiently.</li>
							<li>
								I see challenges, not obstacles. If I need to debug broken code or resolve a conflict,
								I'll always find a solution.
							</li>
						</ul>
					</div>
					<h2>More about me!</h2>
					<div class="about-div">
						<p>
							I share a passion for coding as much as I do cooking and art. I've always appreciated
							crafting something special, whether it be a fancy dinner, an elaborate drawing, or a catchy
							tune. Coding is no exception, and I aspire to turn blank HTML docs into masterpieces. Like
							Picasso!
							<br />
							<br />(...Though, maybe not like Picasso. I'd like to keep my code organized.)
						</p>
					</div>
				</section>

				{/* <!-- Self Photo + Description --> */}
				<section class="my-photo">
					<img src="./assets/images/profileImg.jpg" alt="Self Picture" />
					<hr />
					<h2>
						Hi, I'm JP Eiler. I'm an aspiring full-stack developer hoping to make some pretty cool code. I
						hope you enjoy checking out my work.{' '}
					</h2>
				</section>
			</section>
		</section>
	);
}

export default Bio;
