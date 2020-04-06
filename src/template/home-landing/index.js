import React from 'react';
import BlogList from "../../components/blog-list/"
import Carousel from "../../components/carousel/carousel";
import ProfileCard from "../../components/profile-card/";
import ExternalLinks from "../../components/external-links/";
import BulletinBoard from "../../components/bulletin-board/";
import './style.scss';

class Home extends React.Component {
	// constructor(props) {
	// 	super(props);
    // }

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
}

export default Home;
