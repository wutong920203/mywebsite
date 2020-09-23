import React from 'react';
import Block from '../../elements/block/';
import profileImg from "../../assets/winnie.jpg";
import './style.scss';

class Weibo extends React.Component {
	render() {
        const weiboList = this.props.weiboList;
		return (
            <Block title="微博" containerClassName="weibo-container">
               {
                    weiboList.map((weibo, i) => (
                        <div key={i} className="weibo-component blog-card">
                            <div className="weibo-head-portrait">
                                <img src={profileImg} alt="head portrait"/>
                                <div className="weibo-info">
                                    <div className="weibo-name">
                                        <span>{weibo.author}</span>
                                    </div>
                                    <div className="weibo-post-time">
                                        <span>{weibo.publishedTime}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="split-line"></div>
                            <div className="weibo-content">
                                <span>{weibo.content}</span>
                            </div>
                        </div>
                    ))
               }
                {/* <div className="weibo-component blog-card">
                    <div className="weibo-head-portrait">
                        <img src={profileImg} alt="head portrait"/>
                        <div className="weibo-info">
                            <div className="weibo-name">
                                <span>Tong</span>
                            </div>
                            <div className="weibo-post-time">
                                <span>10-01-2018 21:54</span>
                            </div>
                        </div>
                    </div>
                    <div className="split-line"></div>
                    <div className="weibo-content">
                        <span>里程碑的一天，结束学生身份，喜迎「新时代」。</span>
                    </div>
                </div> */}
            </Block>
        )
	}
}

export default Weibo;