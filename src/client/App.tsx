import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Private from './components/Private';
import BookDetails from './views/BookDetails';
import Books from './views/Books';
import EditBook from './views/EditBook';
import Home from './views/Home';
import Invalid from './views/Invalid';
import Login from './views/Login';
import Profile from './views/Profile';
import Register from './views/Register';

const App = (props: AppProps) => {
	
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route exact path = "/">
					<Home />
				</Route>
				<Route exact path = "/books">
					<Books />
				</Route>
				<Route exact path = "/books/:id">
					<BookDetails />
				</Route>
				<Route exact path = "/edit/:id">
					<EditBook />
				</Route>
				<Private exact path = "/profile">
					<Profile />
				</Private>
				<Route exact path = "/login">
					<Login />
				</Route>
				<Route exact path = "/register">
					<Register />
				</Route>
				<Route exact path = "/invalid">
					<Invalid />
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

interface AppProps {}

export default App;
