import React from 'react';
import Block from '../../elements/block/';
import './style.scss';

class BulletinBoard extends React.Component {
	render() {
		return (
            <Block title="公告栏" containerClassName="bulletin-board">
                <div className="bulletin-board-content">
                    <p>
                        欢迎来到我的个人博客！这是时隔大约10年之后我再一次开通博客，不同的是这一次网站是我自己建的。网站还在完善中，目前只有前端，而文章是以Markdown格式存在服务器里。后端开发已经在计划中，等后端搭建起来后，各种功能将陆续上线。如果您有对网站的建议或其他任何问题，请您将邮件发送到。。。与我联系。感谢您的支持。
                    </p>
                </div>
            </Block>
        )
	}
}

export default BulletinBoard;
