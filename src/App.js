import "./App.css";
import User from "./User";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import All from "./All";

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/" component={All} />
					{/* <Route path="/user/:id/:name"> */}
					<Route path="/user/:id">
						<User />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
