import React from 'react';
import BlogPost from "../../components/blog/blog-post";
import ProfileCard from "../../components/profile-card/";
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
				</aside>
			</div>
		)
	}
}

export default BlogLanding;
