import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Bio from './components/pages/Bio';
import Contact from './components/pages/Contact';
import ProjectPage from './components/pages/ProjectPage';
function App() {
	return (
		<Router>
			<main>
				<Header />
				<Route exact path="/" component={Bio} />
				<Route exact path="/aboutme" component={Bio} />
				<Route exact path="/contact" component={Contact} />
				<Route path="/projects" component={ProjectPage} />
				<div class="clearfix" />
			</main>
			<Footer />
		</Router>
	);
}

export default App;
