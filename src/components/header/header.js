import React from 'react';
import { Link } from "react-router-dom";
import './style.scss';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			category: [
				"首页",
				"关于"
			]
		};
	}

	render() {
		const { pathname } = this.props.location;
		const siteTitle =  pathname === "/" ? 
			<h1 className="header-title">
				梧桐-个人博客
			</h1> :
			<div className="header-title">
				梧桐-个人博客
			</div>
		return (
			<header className="main-header">
				<nav className="main-header-nav-container">
					<Link className="link" to="/">
						{siteTitle}
					</Link>
					{
						this.state.category.map((item, i) => (
							<div className="sub-category" key={i}>
								<a href="/" className="link">{item}</a>
							</div>
						))
					}
				</nav>
			</header>
		)
	};
}

export default Header;
