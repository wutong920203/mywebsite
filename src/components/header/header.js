import React from 'react';
import './style.scss';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			category: [
				"首页",
				"图片"
			]
		};
	}

	render() {
		return <header className="main-header">
			<div className="header-title">
				梧桐-个人博客
			</div>
			{
				this.state.category.map((item, i) => (
					<div className="sub-category" key={i}>
						<a href="/" className="link">{item}</a>
					</div>
				))
			}
		</header>
	};
}

export default Header;
