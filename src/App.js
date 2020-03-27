import React from 'react';
import Header from "./components/header/header";
import BlogCard from "./components/blog-card/blog-card";
import data from "./incomingData.json";
import headImg from "./assets/head-img.jpg";
import logo from './logo.svg';
import './App.scss';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			date: new Date(),
			article: []
		};
	}

	componentDidMount() {
		this.setState({
			article: data.article
		});
	}

	render() {
		return (
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
				<main className="main">
					<div className="img-container">
						<img src={headImg} alt="head-img"></img>
					</div>
					<section className="post-list">
						<div className="post-list-title">
							最新发布
						</div>
						<div className="post-list-content">
							{
								this.state.article.map((item, i) => (
									<BlogCard key={i}
											title={item.title}
											description={item.description}
											url={item.url}
									/>
								))
							}
						</div>
					</section>
				</main>
			</div>
		);
	}
}

export default App;
