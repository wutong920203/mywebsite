import React from 'react';
import { IoMdPerson, IoMdTime } from "react-icons/io";
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
			<Link to={"/blogs/"+this.props.articleDetails.id}>
				<div className="blog-card-title">{this.props.articleDetails.title}</div>
				<div className="blog-card-description">{this.props.articleDetails.description}</div>
				<div className="blog-card-meta">
					<span className="meta-item"><IoMdPerson /><span className="meta-text">{this.props.articleDetails.author}</span></span>
					<span className="meta-item"><IoMdTime /><span className="meta-text">{this.props.articleDetails.publishedTime}</span></span>
				</div>
			</Link>
		</div>
	};
}

export default BlogCard;
