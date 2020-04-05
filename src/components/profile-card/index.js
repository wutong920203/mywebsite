import React from 'react';
import Block from '../../elements/block/';
import profileImg from "../../assets/IMG_0113.jpeg";
import './style.scss';

class ProfileCard extends React.Component {
	render() {
        const customTitle = 
            <div className="profile-head-portrait">
                <img src={profileImg} alt="head portrait"/>
                <div className="profile-name">
                    <span>Tong</span>
                </div>
            </div>;

		return (
            <Block containerClassName="profile-card" customTitle={customTitle} >
                <div className="profile-description">
                    <p>前端工程师，老罗铁粉，老愤青，Eleanor的爸爸。喜爱数码产品，现居美国。</p>
                </div>
            </Block>
        )
	}
}

export default ProfileCard;
