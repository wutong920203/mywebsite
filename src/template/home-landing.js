import React from 'react';
import BlogCard from "../components/blog-card/blog-card";
import Carousel from "../components/carousel/carousel.js"
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
                <Carousel />
                <section className="post-list">
                    <div className="post-list-title">
                        最新发布
                    </div>
                    <div className="post-list-content">
                        {
                            this.props.articleList.map((article, i) => (
                                <BlogCard key={i} articleDetails={article}/>
                            ))
                        }
                    </div>
                </section>
            </div>
        )
	}
}

export default Home;
