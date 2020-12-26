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
				<Route path="/" exact component={Login} />
				<Route path="/profile" component={Profile} />
				<Route path="/repos" component={Repos} />
				<Route path="*" component={NotFound} />
			</Switch>
		</Router>
	);
}
