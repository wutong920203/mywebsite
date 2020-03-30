import React from 'react';
import BlogCard from "../components/blog-card/blog-card";
import Carousel from "../components/carousel/carousel.js"
import profileImg from "../assets/IMG_0113.jpeg";
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
                    <section className="profile-card">
                        <div className="profile-intro">
                            <div className="profile-head-portrait">
                                <img src={profileImg} alt="head portrait"></img>
                            </div>
                            <div className="split-line"></div>
                            <div className="profile-description">
                                Tong, 快消品牌前端工程师，Eleanor的爸爸。现居美国。
                            </div>
                        </div>
                    </section>
                </aside>
            </div>
        )
	}
}

export default Home;
