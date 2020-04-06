import React from 'react';
import BlogPost from "../../components/blog/blog-post";
import ProfileCard from "../../components/profile-card/";
import ExternalLinks from "../../components/external-links/";
import BackButton from "../../components/back-button/"
import './style.scss';

class BlogLanding extends React.Component {
	render() {
		return (
			<div className="home-container">
				<div className="home-main">
					<BlogPost {...this.props}/>
				</div>
				<aside className="home-aside">
					<ProfileCard />
					<ExternalLinks />
				</aside>
				<BackButton />
			</div>
		)
	}
}

export default BlogLanding;
