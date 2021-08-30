import { lazy, Suspense } from 'react';
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from 'react-router-dom';

import Home from '../screens/Home';
import Details from '../screens/Details';
import EditFeedback from '../screens/EditFeedback';
import NewFeedback from '../screens/NewFeedback';
import Roadmap from '../screens/Roadmap';
import Suggestions from '../screens/Suggestions';

const Navigation = () => {
	return (
		<Router>
			<Switch>
				<Route path='/details/:id' exact component={Details} />
				<Route path='/edit' exact component={EditFeedback} />
				<Route path='/new' exact component={NewFeedback} />
				<Route path='/roadmap' exact component={Roadmap} />
				<Route path='/suggestions' exact component={Suggestions} />
				<Route path='/' exact component={Home} />
				<Redirect to='/' />
			</Switch>
		</Router>
	);
};

export default Navigation;
