import React from 'react';
import BlogList from "../../components/blog-list/"
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import './style.scss';

class BlogListLanding extends React.Component {
    componentDidMount() {
		if (document.title !== "文章列表") {
			this.setTitle("文章列表");
		}
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
    
    setTitle (title) {
		document.title = title
	}
}

const mapStateToProps = state => ({
    status: state.site.status,
    blogList: state.site.blogList,
})

BlogListLanding.propTypes = {
    status: PropTypes.string,
    blogList: PropTypes.array
}

export default connect(mapStateToProps)(BlogListLanding)

