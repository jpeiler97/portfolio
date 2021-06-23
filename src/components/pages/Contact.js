import React from 'react';

function Contact() {
	return (
		<section class="contact-section" id="contact-section">
			<section class="contact-me">
				<h1>Where can you reach me?</h1>
				<div class="contact-row">
					<div class="link-div" id="linkedin">
						<img src="assets/images/linkedin.png" alt="linkedin" />
						<h3>
							<a href="https://www.linkedin.com/in/john-p-eiler/" target="_blank">
								John Eiler
							</a>
						</h3>
					</div>
					<div class="link-div" id="gmail">
						<img src="assets/images/64802-icons-symbol-computer-mail-email-icon.png" alt="Gmail" />
						<h3>
							<a href="mailto: jp.eiler97@gmail.com">jp.eiler97@gmail.com</a>
						</h3>
					</div>
					<div class="link-div" id="github">
						<img src="assets/images/github+hub+icon+icon-1320194641335079152.png" alt="Github" />
						<h3>
							<a href="https://github.com/jpeiler97" target="_blank">
								jpeiler97
							</a>
						</h3>
					</div>
				</div>
			</section>
		</section>
	);
}

export default Contact;
