import React from 'react';
import ReactMarkdown from 'react-markdown';
import './style.scss';

class BlogPost extends React.Component {
	render() {
		return (
			<div className="blog-article">
				<article className="blog-content">
					<ReactMarkdown source={this.props.content} escapeHtml={false}/>
				</article>
			</div>
		)
	};
}

export default BlogPost;
