import React from 'react';
import { IoMdPerson, IoMdTime, IoMdPricetag } from "react-icons/io";
import { Link } from "react-router-dom";
import './style.scss';

class BlogCard extends React.Component {
	constructor(props) {
		super(props);
		this.articleDetails = this.props.articleDetails;
		this.categoryTag = this.articleDetails.categoryTag;
	}

	render() {
		const pinned = this.props.articleDetails.pinned ? <div className="blog-card-pinned-post-sign"><span>置顶</span></div> : null;
		return <div className="blog-card">
			<Link to={"/blogs/"+this.props.articleDetails.id}>
				<div className="blog-card-title">{this.props.articleDetails.title}</div>
			</Link>
			<div className="blog-card-description">
				<span className="double-quotation-marks">“</span>
				{this.props.articleDetails.description}
				<span className="double-quotation-marks">”</span>
			</div>
			<div className="blog-card-meta">
				{/* <span className="meta-item"><IoMdPerson /><span className="meta-text">{this.props.articleDetails.author}</span></span> */}
				<span className="meta-item"><IoMdTime /><span className="meta-text">{this.props.articleDetails.publishedTime}</span></span>
				<span className="meta-item category-tag-container">
					<IoMdPricetag />
					<div className="category-tag" style={{borderColor: this.categoryTag.color, backgroundColor: this.categoryTag.color}}>
						<span className="meta-text">{this.categoryTag.title}</span>
					</div>
				</span>
			</div>
			{pinned}
		</div>
	};
}

export default BlogCard;
