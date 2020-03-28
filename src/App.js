import React from 'react';
import Header from "./components/header/header";
import Home from "./home-landing";
import BlogPost from "./components/blog/blog-post";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import incomingData from "./incomingData.json";
import logo from './logo.svg';
import './App.scss';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			date: new Date(),
		};
		this.articleList = incomingData.article;
	}

	render() {
		return (
			<Router>
				<div className="App">
					{/* <header className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
						<p>
							Edit <code>src/App.js</code> and save to reload.
						</p>
						<a
							className="App-link"
							href="https://reactjs.org"
							target="_blank"
							rel="noopener noreferrer"
						>
							Learn React
						</a>
					</header> */}
					<Header/>
					<div className="header-placeholder"></div>
					<main className="main">
						<Switch>
							<Route exact path="/">
								<Home articleList={this.articleList}/>
							</Route>
							<Route path="/blogs/:blogId" render={(props) => <BlogPost {...props} articleList={this.articleList}/>}/>
						</Switch>
					</main>
				</div>
			</Router>
		);
	}
}

export default App;
