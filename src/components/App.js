import React from "react";
import { GlobalStyles } from "../styles/GlobalStyles";
import Login from "./Login";
import Navbar from "./Navbar";
import Repos from "./Routes/Repos";
import Profile from "./Routes/Profile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./Routes/NotFound";

export default function App() {
	return (
		<Router>
			<GlobalStyles />
			<Navbar />
			<Switch>
				<Route path="/repos" exact component={Repos} />
				<Route path="/profile" exact component={Profile} />
				<Route path="/" exact component={Login} />
				<Route path="*" component={NotFound} />
			</Switch>
		</Router>
	);
}
