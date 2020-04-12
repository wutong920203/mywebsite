import React from 'react';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Hoc from "./components/HOC/";
import BackToTop from "./components/back-to-top/";
import Home from "./template/home-landing/";
import BlogListLanding from "./template/blog-list-landing/";
import BlogLanding from "./template/blog-landing/";
import store from './store';
import incomingData from "./incomingData.json";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { requestGetSiteData } from './reducers/site';
import './App.scss';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			date: new Date(),
		};
		this.articleList = incomingData.article;
	}

	componentDidMount () {
		store.dispatch(requestGetSiteData());
	}

	render() {
		return (
			<Router>
				<Hoc>
					<div className="App">
						<Route path="/" render={(props) => <Header {...props}/>} />
						<div className="header-placeholder"></div>
						<main className="main layout-responsive">
							<Switch>
								<Route exact path="/" component={Home}/>
								<Route exact path="/blogs" component={BlogListLanding} />
								<Route path="/blogs/:blogId" render={(props) => <BlogLanding {...props} articleList={this.articleList}/>}/>
							</Switch>
						</main>
						<BackToTop />
						<Footer />
					</div>
				</Hoc>
			</Router>
		);
	}
}

export default App;
