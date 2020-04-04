import React from 'react';
import { IoIosArrowUp } from "react-icons/io";
import './style.scss';

class BackToTop extends React.Component {
	render() {
		return (
            <div className="back-to-top" onClick={() => this.backToTop()}>
                <IoIosArrowUp />
            </div>
        )
    };
    
    backToTop () {
        window.scrollTo(0, 0);
    }
}

export default BackToTop;