import React from 'react';
import { IoIosArrowUp } from "react-icons/io";
import './style.scss';

class BackToTop extends React.Component {
    constructor(props) {
        super(props);

        this.ticking = false;
        this.state = {
            isShowing: false
        }
        this.onScroll = this.onScroll.bind(this);
        this.showButton = this.showButton.bind(this);
    }

    componentDidMount() {
        this.clientHeight = document.body.clientHeight;
        window.addEventListener('scroll', this.onScroll, false)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll, false);
    }
    
	render() {
		return (
            <div className="back-to-top" onClick={() => this.backToTop()} style={{visibility: this.state.isShowing ? "visible" : "hidden"}}>
                <IoIosArrowUp />
            </div>
        )
    };
    
    backToTop() {
        window.scrollTo(0, 0);
    }

    showButton() {
        const { pageYOffset } = window;
        this.setState({
            isShowing: (pageYOffset > this.clientHeight)
        });
        this.ticking = false;
    }

    onScroll() {
        if(!this.ticking) {
            requestAnimationFrame(this.showButton);
            this.ticking = true;
        }
    }
}

export default BackToTop;