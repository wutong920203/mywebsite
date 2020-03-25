import React from 'react';
import './style.scss';

class BlogCard extends React.Component {
	// constructor(props) {
	// 	super(props);
	// }

	render() {
		return <div className="blog-card">
			<div className="blog-card-title">{this.props.title}</div>
			<div className="blog-card-description">{this.props.description}</div>
			<div className="blog-card-meta"></div>
		</div>
	};
}

export default BlogCard;
