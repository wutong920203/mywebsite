import React from 'react';
import { Link } from "react-router-dom";
import './style.scss';

class BlogCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			content: ""
		};
	}

	render() {
		return <div className="blog-card">
			<Link to={"/blogs/"+this.props.id}>
				<div className="blog-card-title">{this.props.title}</div>
				<div className="blog-card-description">{this.props.description}</div>
				<div className="blog-card-meta"></div>
			</Link>
		</div>
	};
}

export default BlogCard;
