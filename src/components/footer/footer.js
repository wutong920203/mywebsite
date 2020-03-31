import React from 'react';
import './style.scss';

class Footer extends React.Component {
	// constructor(props) {
	// 	super(props);
	// }

	render() {
		return <footer className="main-footer">
			<div className="footer-text">永远年轻，永远热泪盈眶。</div>
			<div className="footer-copy-right">© 2020 Tongtong. All Rights Reserved.</div>
		</footer>
	};
}

export default Footer;