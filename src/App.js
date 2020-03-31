import React from 'react';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./template/home-landing/";
import BlogLanding from "./template/blog-landing/";
import { IconContext } from "react-icons";
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
					<IconContext.Provider value={{ className: 'react-icons' }}>
						<Route path="/" render={(props) => <Header {...props}/>} />
						<div className="header-placeholder"></div>
						<main className="main">
							<Switch>
								<Route exact path="/">
									<Home articleList={this.articleList}/>
								</Route>
								<Route path="/blogs/:blogId" render={(props) => <BlogLanding {...props} articleList={this.articleList}/>}/>
							</Switch>
						</main>
						<Footer />
					</IconContext.Provider>
				</div>
			</Router>
		);
	}
}

export default App;
