import React from 'react';
import MetaInfo from '../meta-info/';
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
				<MetaInfo blogData={articleDetails}/>
				{pinned}
			</div>
		)
	};
}

export default BlogCard;
