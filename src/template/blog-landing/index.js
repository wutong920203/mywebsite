import React from 'react';
import BlogPost from "../../components/blog/blog-post";
import ProfileCard from "../../components/profile-card/";
import ExternalLinks from "../../components/external-links/";
import './style.scss';

class BlogLanding extends React.Component {
	render() {
		return (
			<div className="blog-container">
				<div className="blog-main">
					<BlogPost {...this.props}/>
				</div>
				<aside className="blog-aside">
					<ProfileCard />
					<ExternalLinks />
				</aside>
			</div>
		)
	}
}

export default BlogLanding;
