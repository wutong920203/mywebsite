import React from 'react';
import ReactMarkdown from'react-markdown';
import './style.scss';

class BlogCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			content: ""
		};
	}

	componentDidMount() {
		fetch(this.props.url)
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
				console.log(error);
			}
		)
	}

	render() {
		return <div className="blog-card">
			<div className="blog-card-title">{this.props.title}</div>
			<div className="blog-card-description">{this.props.description}</div>
			<div className="blog-card-meta"></div>
			<div className="blog-card-content">
				<ReactMarkdown source={this.state.content} />
			</div>
		</div>
	};
}

export default BlogCard;
