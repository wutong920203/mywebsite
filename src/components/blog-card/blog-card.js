import React from 'react';
import { IconContext } from "react-icons";
import { IoIosPerson, IoMdTime } from "react-icons/io";
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
				<div className="blog-card-title">{this.props.articleDetails.title}</div>
				<div className="blog-card-description">{this.props.articleDetails.description}</div>
				<IconContext.Provider value={{ className: 'react-icons' }}>
					<div className="blog-card-meta">
						<span className="meta-item"><IoIosPerson /><span className="meta-text">{this.props.articleDetails.author}</span></span>
						<span className="meta-item"><IoMdTime /><span className="meta-text">{this.props.articleDetails.publishedTime}</span></span>
					</div>
				</IconContext.Provider>
			</Link>
		</div>
	};
}

export default BlogCard;
