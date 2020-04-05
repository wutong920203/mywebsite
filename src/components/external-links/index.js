import React from 'react';
import Block from '../../elements/block/';
import { IoLogoGoogle, IoLogoGithub, IoLogoYoutube, IoLogoTwitter, IoLogoFacebook } from "react-icons/io";
import './style.scss';

class ExternalLinks extends React.Component {
	render() {
		return (
            <Block title="常用链接" containerClassName="external-links">
                <div className="external-links-list">
                    <a className="external-link" href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
                        <IoLogoGoogle />
                        <span className="link-name">Google</span>
                    </a>
                    <a className="external-link" href="https://github.com/" target="_blank" rel="noopener noreferrer">
                        <IoLogoGithub />
                        <span className="link-name">GitHub</span>
                    </a>
                    <a className="external-link" href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                        <IoLogoYoutube />
                        <span className="link-name">YouTube</span>
                    </a>
                    <a className="external-link" href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                        <IoLogoTwitter />
                        <span className="link-name">Twitter</span>
                    </a>
                    <a className="external-link" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                        <IoLogoFacebook />
                        <span className="link-name">Facebook</span>
                    </a>
                </div>
            </Block>
        )
	}
}

export default ExternalLinks;
