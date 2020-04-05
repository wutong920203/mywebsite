import React from "react";
import { IconContext } from "react-icons";
import { withRouter } from "react-router-dom";

class Hoc extends React.Component {
    componentDidUpdate(prevProps) {
        // probably have problem
        if (this.props.location.pathname !== prevProps.location.pathname) {
            setTimeout(() => {
                window.scrollTo(0, 0);
            }, 100);
        }
    }

    render() {
        return (
            <IconContext.Provider value={{ className: 'react-icons' }}>
                {this.props.children}
            </IconContext.Provider>
        )
    }
}

export default withRouter(Hoc)