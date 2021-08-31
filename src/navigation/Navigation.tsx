import { lazy, Suspense } from 'react';
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from 'react-router-dom';

const Home = lazy(() => import('../screens/Home'));
const Details = lazy(() => import('../screens/Details'));
const EditFeedback = lazy(() => import('../screens/EditFeedback'));
const NewFeedback = lazy(() => import('../screens/NewFeedback'));
const Roadmap = lazy(() => import('../screens/Roadmap'));
const Suggestions = lazy(() => import('../screens/Suggestions'));

const Navigation = () => {
	return (
		<Suspense fallback={<p>Loading...</p>}>
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
		</Suspense>
	);
};

export default Navigation;
