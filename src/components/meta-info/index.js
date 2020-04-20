import React from 'react';
import { IoMdTime, IoMdPricetag } from "react-icons/io";
import './style.scss';

function MetaInfo (props) {
    const { blogData } = props;
    return (
        <div className="blog-meta">
            {/* <span className="meta-item"><IoMdPerson /><span className="meta-text">{articleDetails.author}</span></span> */}
            <span className="meta-item"><IoMdTime className="react-icons" /><span className="meta-text">{blogData.publishedTime}</span></span>
            <span className="meta-item category-tag-container">
                <IoMdPricetag className="react-icons" />
                <div className="category-tag" style={{borderColor: blogData.categoryTag.color, backgroundColor: blogData.categoryTag.color}}>
                    <span className="meta-text">{blogData.categoryTag.title}</span>
                </div>
            </span>
        </div>
    )
}

export default MetaInfo;