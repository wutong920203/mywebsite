import React from 'react';
import Block from '../../elements/block/';
import BlogCard from "../blog-card/blog-card";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import './style.scss';

class BlogList extends React.Component {
	render() {
        const blogList = this.props.blogList;
        let listContent = blogList.length === 0 ? <AiOutlineLoading3Quarters className="loading" /> : blogList.map((article, i) => (
            <BlogCard key={i} articleDetails={article}/>
        ));

		return (
            <Block title="文章" containerClassName="blog-list">
                <div className="blog-list-content">
                    { listContent }
                </div>
            </Block>
        )
	}
}

export default BlogList;
