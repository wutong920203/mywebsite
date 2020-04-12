import React from 'react';
import PropTypes from 'prop-types'
import BlogPost from "../../components/blog-post/";
import ProfileCard from "../../components/profile-card/";
import ExternalLinks from "../../components/external-links/";
import BackButton from "../../components/back-button/";
import { connect } from 'react-redux';
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

const mapStateToProps = state => ({
    status: state.site.status,
    siteData: state.site.siteData,
    blogList: state.site.blogList,
})

// const mapDispatchToProps = dispatch => bindActionCreators({requestGetSiteData}, dispatch)

BlogLanding.propTypes = {
    status: PropTypes.string,
    siteData: PropTypes.object,
    blogList: PropTypes.array
}

export default connect(mapStateToProps)(BlogLanding)

// export default BlogLanding;
