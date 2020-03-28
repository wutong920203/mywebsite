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
                            this.props.articleList.map((item, i) => (
                                <BlogCard key={i}
                                        title={item.title}
                                        description={item.description}
                                        id={item.id}
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
