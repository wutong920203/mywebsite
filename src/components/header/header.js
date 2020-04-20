import React from 'react';
import { Link } from "react-router-dom";
import './style.scss';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			category: [
				{
					title: "首页",
					url: "/"
				},
				{
					title: "文章列表",
					url: "/blogs"
				}
			]
		};
	}

	render() {
		const { pathname } = this.props.location;
		const siteTitle =  pathname === "/" ? 
			<h1 className="header-title">
				猪式晦涩
			</h1> :
			<div className="header-title">
				猪式晦涩
			</div>
		return (
			<header className="main-header">
				<nav className="main-header-nav-container layout-responsive">
					<Link className="link" to="/">
						{siteTitle}
					</Link>
					{
						this.state.category.map((item, i) => (
							<div className="sub-category" key={i}>
								<Link to={item.url} className="link">{item.title}</Link>
							</div>
						))
					}
				</nav>
			</header>
		)
	};
}

export default Header;
