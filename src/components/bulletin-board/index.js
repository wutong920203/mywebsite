import React from 'react';
import './style.scss';

class BulletinBoard extends React.Component {
	render() {
		return (
            <section className="bulletin-board">
                <h2 className="bulletin-board-title">
                    <span>置顶</span>
                </h2>
                <div className="split-line"></div>
                <div className="bulletin-board-content">
                    <p>
                        大家好，欢迎来到我的博客。这是我的第一篇文章，我是为了实验一下。谢谢大家。目前网站还未开发后端，所以有些功能还无法实现。但后端开发已经在计划中，敬请期待。
                    </p>
                </div>
            </section>
        )
	}
}

export default BulletinBoard;
