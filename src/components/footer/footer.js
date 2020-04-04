import React from 'react';
import './style.scss';

class Footer extends React.Component {
	// constructor(props) {
	// 	super(props);
	// }

	render() {
		return <footer className="main-footer">
			<div className="main-footer-content-container">
				<div className="footer-text">永远年轻，永远热泪盈眶。</div>
				<div className="footer-copy-right">© 2020 Tongtong. All Rights Reserved.</div>
			</div>
		</footer>
	};
}

export default Footer;