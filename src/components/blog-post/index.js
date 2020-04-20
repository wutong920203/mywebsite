import React from 'react';
import ReactDOM from 'react-dom';
import MetaInfo from '../meta-info/';
import ReactMarkdown from 'react-markdown';
import './style.scss';

class BlogPost extends React.Component {
	componentDidUpdate(previousProps) {
		if (previousProps.blogData !== this.props.blogData) {
			const { blogData } = this.props;
			const attachMetaData = setInterval(() => {
				const metaContainer = document.getElementById("meta-container");
				if (metaContainer) {
					ReactDOM.render(
						<MetaInfo blogData={blogData}/>,
						document.getElementById("meta-container")
					);
					clearInterval(attachMetaData);
				}
			}, 100);
		}
	}
	
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
