import React from 'react';
import BlogList from "../../components/blog-list/"
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
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

const mapStateToProps = state => ({
    status: state.site.status,
    blogList: state.site.blogList,
})

BlogListLanding.propTypes = {
    status: PropTypes.string,
    blogList: PropTypes.array
}

export default connect(mapStateToProps)(BlogListLanding)

