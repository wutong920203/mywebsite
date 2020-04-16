import React from 'react';
import PropTypes from 'prop-types'
import BlogPost from "../../components/blog-post/";
import ProfileCard from "../../components/profile-card/";
import ExternalLinks from "../../components/external-links/";
import BackButton from "../../components/back-button/";
import { connect } from 'react-redux';
import './style.scss';

class BlogLanding extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			content: ""
		};
	}

	componentDidMount() {
		const { match } = this.props;
		const { blogId } = match.params;
		this.getMarkdown(blogId);
	}

	render() {
		return (
			<div className="home-container">
				<div className="home-main">
					<BlogPost content={this.state.content}/>
				</div>
				<aside className="home-aside">
					<ProfileCard />
					<ExternalLinks />
				</aside>
				<BackButton />
			</div>
		)
	}

	getMarkdown(blogId) {
		fetch(`/md/${blogId}`)
		.then(res => {
			if (res.status >= 200 && res.status < 300) {
				const title = res.headers.get("title");
				this.setTitle(unescape(title));
				return Promise.resolve(res.text());
			} else {
				return Promise.reject(new Error(res.statusText));
			}
		})
		.then(
			(result) => {
				this.setState({
					content: result
				})
			},
			// 注意：需要在此处处理错误
			// 而不是使用 catch() 去捕获错误
			// 因为使用 catch 去捕获异常会掩盖掉组件本身可能产生的 bug
			(error) => {
				console.log(error);
				this.setState({
					error
				});
			}
		);
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

BlogLanding.propTypes = {
    status: PropTypes.string,
    siteData: PropTypes.object,
    blogList: PropTypes.array
}

export default connect(mapStateToProps)(BlogLanding)
