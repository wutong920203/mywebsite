import React from 'react';
import BlogCard from "../../components/blog-card/blog-card";
import Carousel from "../../components/carousel/carousel.js";
import ProfileCard from "../../components/profile-card/";
import BulletinBoard from "../../components/bulletin-board/";
import './style.scss';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			article: []
		};
    }

	render() {
		return (
            <div className="home-container">
                <div className="home-main">
                    <BulletinBoard />
                    <Carousel />
                    <section className="post-list">
                        <h2 className="post-list-title">
                            文章
                        </h2>
                        <div className="post-list-content">
                            {
                                this.props.articleList.map((article, i) => (
                                    <BlogCard key={i} articleDetails={article}/>
                                ))
                            }
                        </div>
                    </section>
                </div>
                <aside className="home-aside">
                    <ProfileCard />
                </aside>
            </div>
        )
	}
}

export default Home;
