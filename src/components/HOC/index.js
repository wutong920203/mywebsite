import React from "react";
import { IconContext } from "react-icons";
import { withRouter } from "react-router-dom";

class Hoc extends React.Component {
     componentDidUpdate(prevProps) {
         if (this.props.location !== prevProps.location) {
             window.scrollTo(0, 0);
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