import React from 'react';
import BlogCard from "./components/blog-card/blog-card";
import headImg from "./assets/head-img.jpg";
import './App.scss';

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
                <div className="img-container">
                    <img src={headImg} alt="head-img"></img>
                </div>
                <section className="post-list">
                    <div className="post-list-title">
                        最新发布
                    </div>
                    <div className="post-list-content">
                        {
                            this.props.articleList.map((article, i) => (
                                <BlogCard key={i} articleDetails={article}
                                        
                                />
                            ))
                        }
                    </div>
                </section>
            </div>
        )
	}
}

export default Home;
