import React from 'react';
import PropTypes from 'prop-types'
import BlogPost from "../../components/blog-post/";
import ProfileCard from "../../components/profile-card/";
import ExternalLinks from "../../components/external-links/";
import BackButton from "../../components/back-button/";
import { connect } from 'react-redux';
import './style.scss';

class BlogLanding extends React.Component {
	constructor (props) {
		super(props);
		const { match } = this.props;
		this.blogId  = match.params.blogId;
		this.getBlogData = this.getBlogData.bind(this);
		this.state = {
			content: "",
			blogData: {}
		};
	}

	componentDidMount () {
		this.getMarkdown(this.blogId);
		this.getBlogData(this.props.blogList);
	}

	componentDidUpdate (previousProps) {
		if (previousProps.blogList !== this.props.blogList) {
			this.getBlogData(this.props.blogList);
		}
	}

	render () {
		return (
			<div className="home-container">
				<div className="home-main">
					<BlogPost content={this.state.content} blogData={this.state.blogData}/>
				</div>
				<aside className="home-aside">
					<ProfileCard />
					<ExternalLinks />
				</aside>
				<BackButton />
			</div>
		)
	}

	getMarkdown (blogId) {
		fetch(`/api/md/${blogId}`)
		.then(res => {
			if (res.status >= 200 && res.status < 300) {
				const title = res.headers.get("title");
				this.setTitle(unescape(title) + " - 猪式晦涩");
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

	getBlogData (blogList) {
		const blogData = blogList.find((blog) => blog.id === this.blogId);
		if (blogData) {
			this.setState({
				blogData
			});
		}
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
