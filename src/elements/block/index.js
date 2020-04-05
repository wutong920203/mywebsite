import React from 'react';
import './style.scss';

class Block extends React.Component {
    static defaultProps = { 
        containerClassName: "",
        titleClassName: "",
        title: "",
        customTitle: null
    }

	render() {
        const { containerClassName, titleClassName, customTitle } = this.props;
        const defaultTitle = 
            <h2 className={`block-board-title h2-style ${titleClassName}`}>
                <span>{this.props.title}</span>
            </h2>;
        const titleContent = customTitle ? customTitle : defaultTitle;
		return (
            <section className={`block-board-element ${containerClassName}`}>
                {titleContent}
                <div className="split-line"></div>
                {this.props.children}
            </section>
        )
	}
}

export default Block;
