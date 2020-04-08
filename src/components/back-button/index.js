import React from 'react';
import { IoIosArrowRoundBack } from "react-icons/io";
import { withRouter } from "react-router-dom";
import './style.scss';

class BackButton extends React.Component {
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
    
	render() {
		return (
            <div className="back-button" onClick={() => this.backToLastLevel()} style={{left: this.state.left+"px"}}>
                <IoIosArrowRoundBack />
            </div>
        )
    };
    
    backToLastLevel() {
        const { history } = this.props;
        history.goBack();
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

export default withRouter(BackButton);