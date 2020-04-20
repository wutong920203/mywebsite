import React from 'react';
import PropTypes from 'prop-types'
import BlogList from "../../components/blog-list/"
import Carousel from "../../components/carousel/carousel";
import ProfileCard from "../../components/profile-card/";
import ExternalLinks from "../../components/external-links/";
import BulletinBoard from "../../components/bulletin-board/";
import { connect } from 'react-redux';
import './style.scss';

class Home extends React.Component {
	componentDidMount() {
		if (document.title !== "猪式晦涩") {
			this.setTitle("猪式晦涩");
		}
	}

	render() {
		return (
			<div className="home-container">
				<div className="home-main">
					<BulletinBoard />
					{/* <Carousel /> */}
					<BlogList {...this.props}/>
				</div>
				<aside className="home-aside">
					<ProfileCard />
					<ExternalLinks />
				</aside>
			</div>
		)
	}
	
	setTitle (title) {
		document.title = title
	}
}

const mapStateToProps = state => ({
	status: state.site.status,
	siteData: state.site.siteData,
	blogList: state.site.blogList,
})

// const mapDispatchToProps = dispatch => bindActionCreators({requestGetSiteData}, dispatch)

Home.propTypes = {
	status: PropTypes.string,
	siteData: PropTypes.object,
	blogList: PropTypes.array
}

export default connect(mapStateToProps)(Home)
