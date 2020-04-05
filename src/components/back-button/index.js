import React from 'react';
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import './style.scss';

class BackToTop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            left: 0
        }
        this.ticking = false;
        this.onResize = this.onResize.bind(this);
        this.updateButtonPosition = this.updateButtonPosition.bind(this);
    }

    componentDidMount() {
        this.updateButtonPosition();
        window.onresize = this.onResize;
    }

    // componentDidUpdate(prevProps) {
    //     console.log(this.props.location);
    //     console.log(prevProps.location);
    // }
    
	render() {
		return (
            <Link className="link" to="/">
                <div className="back-button" onClick={() => this.backToLastLevel()} style={{left: this.state.left+"px"}}>
                    <IoIosArrowRoundBack />
                </div>
            </Link>
        )
    };
    
    backToLastLevel() {
        console.log("test");
    }

    updateButtonPosition() {
        const LARGE_WIDTH = 1180;
        const MEDIUM_WIDTH = 960;
        const WIDTH_THRESHOLD = 1250;
        const MAIN_PADDING = 15;
        const BUTTON_WIDTH = 50;

        const clientWidth = document.body.clientWidth;
        const MAIN_WIDTH = clientWidth > WIDTH_THRESHOLD ? LARGE_WIDTH : MEDIUM_WIDTH;
        const threshold = (clientWidth - MAIN_WIDTH)/2 - BUTTON_WIDTH + MAIN_PADDING;
        const left = threshold > 0 ? threshold : 0;
        this.setState({
            left
        });
        this.ticking = false;
    }

    onResize() {
        if(!this.ticking) {
            requestAnimationFrame(this.updateButtonPosition);
            this.ticking = true;
        }
    }
}

export default BackToTop;