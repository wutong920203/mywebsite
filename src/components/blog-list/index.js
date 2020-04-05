import React from 'react';
import Block from '../../elements/block/';
import BlogCard from "../blog-card/blog-card";
import './style.scss';

class BlogList extends React.Component {
	render() {
		return (
            <Block title="文章" containerClassName="blog-list">
                <div className="blog-list-content">
                    {
                        this.props.articleList.map((article, i) => (
                            <BlogCard key={i} articleDetails={article}/>
                        ))
                    }
                </div>
            </Block>
        )
	}
}

export default BlogList;
