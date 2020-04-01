import React from 'react';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import ScrollToTop from "./components/scroll-to-top/";
import Home from "./template/home-landing/";
import BlogLanding from "./template/blog-landing/";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import incomingData from "./incomingData.json";
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
				<ScrollToTop>
					<div className="App">
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
					</div>
				</ScrollToTop>
			</Router>
		);
	}
}

export default App;
