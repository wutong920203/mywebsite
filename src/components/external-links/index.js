import React from 'react';
import { Link } from "react-router-dom";
import { IoLogoGoogle, IoLogoGithub, IoLogoYoutube, IoLogoTwitter, IoLogoFacebook } from "react-icons/io";
import './style.scss';

class ExternalLinks extends React.Component {
	render() {
		return (
            <section className="external-links">
                <h2 className="external-links-title h2-style">
                    <span>常用链接</span>
                </h2>
                <div className="split-line"></div>
                <div className="external-links-list">
                    <div className="external-link">
                        <IoLogoGoogle />
                        <span className="link-name">Google</span>
                    </div>
                    <div className="external-link">
                        <IoLogoGithub />
                        <span className="link-name">GitHub</span>
                    </div>
                    <div className="external-link">
                        <IoLogoYoutube />
                        <span className="link-name">YouTube</span>
                    </div>
                    <div className="external-link">
                        <IoLogoTwitter />
                        <span className="link-name">Twitter</span>
                    </div>
                    <div className="external-link">
                        <IoLogoFacebook />
                        <span className="link-name">Facebook</span>
                    </div>
                </div>
            </section>
        )
	}
}

export default ExternalLinks;
