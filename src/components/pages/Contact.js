import React from 'react';

function Contact() {
	return (
		<section className="contact-section" id="contact-section">
			<section className="contact-me">
				<h1>Where can you reach me?</h1>
				<div className="contact-row">
					<div className="link-div" id="linkedin">
						<img src="assets/images/linkedin.png" alt="linkedin" />
						<h3>
							<a href="https://www.linkedin.com/in/john-p-eiler/" target="_blank" rel="noreferrer">
								John Eiler
							</a>
						</h3>
					</div>
					<div className="link-div" id="gmail">
						<img src="assets/images/64802-icons-symbol-computer-mail-email-icon.png" alt="Gmail" />
						<h3>
							<a href="mailto: jp.eiler97@gmail.com">jp.eiler97@gmail.com</a>
						</h3>
					</div>
					<div className="link-div" id="github">
						<img src="assets/images/github+hub+icon+icon-1320194641335079152.png" alt="Github" />
						<h3>
							<a href="https://github.com/jpeiler97" target="_blank" rel="noreferrer">
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
