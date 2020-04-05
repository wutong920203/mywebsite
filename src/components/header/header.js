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
				Tong - 个人博客
			</h1> :
			<div className="header-title">
				Tong - 个人博客
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
								<a href={item.url} className="link">{item.title}</a>
							</div>
						))
					}
				</nav>
			</header>
		)
	};
}

export default Header;
