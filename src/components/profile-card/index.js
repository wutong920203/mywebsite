import React from 'react';
import profileImg from "../../assets/IMG_0113.jpeg";
import './style.scss';

class ProfileCard extends React.Component {
	render() {
		return (
            <section className="profile-card">
                <div className="profile-intro">
                    <div className="profile-head-portrait">
                        <img src={profileImg} alt="head portrait"/>
                        <div className="profile-name">
                            <span>Tong</span>
                        </div>
                    </div>
                    <div className="split-line"></div>
                    <div className="profile-description">
                        <p>前端工程师，老罗铁粉，Eleanor的爸爸。喜爱数码产品，现居美国。</p>
                    </div>
                </div>
            </section>
        )
	}
}

export default ProfileCard;
