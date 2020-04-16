import React from 'react';
import { IoMdPerson, IoMdTime, IoMdPricetag } from "react-icons/io";
import { Link } from "react-router-dom";
import './style.scss';

class BlogCard extends React.Component {
	render() {
		const { articleDetails } = this.props;
		const pinned = articleDetails.pinned ? <div className="blog-card-pinned-post-sign"><span>置顶</span></div> : null;
	
		return (
			<div className="blog-card">
				<Link to={"/blogs/" + articleDetails.id}>
					<div className="blog-card-title">{articleDetails.title}</div>
				</Link>
				<div className="blog-card-description">
					<span className="double-quotation-marks">“</span>
					{articleDetails.description}
					<span className="double-quotation-marks">”</span>
				</div>
				<div className="blog-card-meta">
					{/* <span className="meta-item"><IoMdPerson /><span className="meta-text">{articleDetails.author}</span></span> */}
					<span className="meta-item"><IoMdTime /><span className="meta-text">{articleDetails.publishedTime}</span></span>
					<span className="meta-item category-tag-container">
						<IoMdPricetag />
						<div className="category-tag" style={{borderColor: articleDetails.categoryTag.color, backgroundColor: articleDetails.categoryTag.color}}>
							<span className="meta-text">{articleDetails.categoryTag.title}</span>
						</div>
					</span>
				</div>
				{pinned}
			</div>
		)
	};
}

export default BlogCard;
