import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import './style.scss';

class Carousel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			left: "0",
			currentIndex: 0
		}
		this.items = [
			{
				img: "/head-img.jpg",
				url: "/blogs/0000",
				alt: "test1"
			},
			// {
			// 	img: "/head-img.jpg",
			// 	url: "/blogs/0000",
			// 	alt: "test2"
			// },
			// {
			// 	img: "/head-img.jpg",
			// 	url: "/blogs/0000",
			// 	alt: "test3"
			// },
		];
		this.carouselLength = this.items.length;
	}

	render() {
		const previousButton = this.state.currentIndex === 0 ? null :
		<button className="carousel-arrow" data-direction="previous" onClick={() => this.handleArrowClick(true)}>
			<IoIosArrowBack />
		</button>;

		const nextButton = this.state.currentIndex === this.carouselLength - 1 ? null :
		<button className="carousel-arrow" data-direction="next" onClick={() => this.handleArrowClick(false)}>
			<IoIosArrowForward />
		</button>;
		
		return <div className="carousel-wrapper">
			<ul className="carousel-container" style={{width: this.carouselLength*100 + "%", left: this.state.currentIndex*-100 + "%"}}>
				{
					this.items.map((item, i) => (
						<li className="carousel-image-container" key={i}>
							<img src={item.img} alt={item.alt}></img>
						</li>
					))
				}
			</ul>
			<div className="carousel-arrows">
				{previousButton}
				{nextButton}
			</div>
		</div>
	};

	handleArrowClick(isPrevious) {
		const { currentIndex } = this.state;
		const nextIndex = isPrevious ? (currentIndex - 1 < 0 ? this.carouselLength - 1 : currentIndex - 1) : (currentIndex + 1 >= this.carouselLength ? 0 : currentIndex + 1);
		this.setState({
			currentIndex: nextIndex
		});
	}
	
}

export default Carousel;