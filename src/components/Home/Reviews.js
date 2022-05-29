import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useReviews from '../../hooks/useReviews';
import SingleReview from './SingleReview';
import Slider from 'react-slick/lib/slider';

const Reviews = () => {

    const [reviews] = useReviews();
    const totalReviews = reviews.length;
    // let filteredReviews = reviews.slice(totalReviews - 3, totalReviews);
    let filteredReviews = reviews.slice(0, totalReviews);
    filteredReviews = filteredReviews.reverse();

    const settings = {
        className: "center",
        dots: true,
        centerMode: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 0,
        autoplay: true,
        speed: 300,
        autoplaySpeed: 1500,
        cssEase: "linear"
    };

    return (
        <div className="container py-5">
            <h1 className='text-center mb-5'>What Our <span className='text-main'>Clients</span> Says</h1>
            <Slider {...settings}>
                {filteredReviews.map((review) => (
                    <SingleReview key={review._id} review={review}></SingleReview>
                ))}
            </Slider>
        </div>
    );
};

export default Reviews;