import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './components/Navigation';

function App() {
	return (
		<Router>
			<div>
				<Header />
				<Navigation />
				<Footer />
			</div>
		</Router>
	);
}

export default App;
