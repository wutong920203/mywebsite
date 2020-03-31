import React from 'react';
import ReactMarkdown from 'react-markdown';
import './style.scss';

class BlogPost extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			content: ""
		};
	}

	componentDidMount() {
		const { match, articleList } = this.props;
		const { blogId } = match.params;
		const blog = articleList.find(element => element.id === blogId);
		this.getMarkdown(blog.url);
	}

	render() {
		return (
			<div className="blog-article">
				<article className="blog-content">
					<ReactMarkdown source={this.state.content} />
				</article>
			</div>
		)
	};

	getMarkdown(url) {
		fetch(url)
		.then(res => res.text())
		.then(
			(result) => {
				this.setState({
					content: result
				})
				console.log(result)
			},
			// 注意：需要在此处处理错误
			// 而不是使用 catch() 去捕获错误
			// 因为使用 catch 去捕获异常会掩盖掉组件本身可能产生的 bug
			(error) => {
				this.setState({
					error
				});
			}
		)
	}
}

export default BlogPost;
