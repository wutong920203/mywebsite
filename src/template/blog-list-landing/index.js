import React from 'react';
import BlogList from "../../components/blog-list/"
import './style.scss';

class BlogListLanding extends React.Component {
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
                    <BlogList {...this.props}/>
                </div>
                <aside className="home-aside">
                </aside>
            </div>
        )
	}
}

export default BlogListLanding;
