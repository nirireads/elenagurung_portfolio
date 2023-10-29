import React from 'react'
import './index.scss'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import annapurna from '../../assets/img/testimonials/annapurna.png';
import oneoone from '../../assets/img/testimonials/oneoone.jpg';
import partynepal from '../../assets/img/testimonials/partyNepal.png';
import thehimalayantimes from '../../assets/img/testimonials/himalayan.jpg';
import thedoers from '../../assets/img/testimonials/thedoers.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';


const Testimonials = () => {

    const testimonialsData = [
        {
            imgSrc: thehimalayantimes,
            companyName: 'The Himalayan Times',
            title: 'Standing out from the crowd',
            link: 'http://epaper.thehimalayantimes.com/infinity/article_popover_share.aspx?guid=f161aaf8-545c-43c0-a916-3f5024df513a&fbclid=IwAR0bY8VeUC-8-UmQ2RhHu0nBqHcyFac5bBvwbhMjO4wET0yBmxCrPkn3rc8',
            quote: 'Her quirky and frenetic energy in these videos quickly made her darling of many viewers and she has now moved to longer video formats on her YouTube channel',
        },
        {
            imgSrc: thedoers,
            companyName: 'The Doers',
            title: 'Elena Tika Gurung || Anish Jung Thapa || Content Creator || S3 EP 7 PT 1 || Nepali Podcast',
            link: 'https://www.youtube.com/watch?v=mwAIpfRWFxM',
            quote: 'In season 3 episode 7, we speak with Elena Tika Gurung and Anish Jung Thapa about Content Creation.',
        },

        {
            imgSrc: oneoone,
            companyName: 'One O One',
            title: 'Elena Don || S2 Ep 3',
            link: 'https://www.youtube.com/watch?v=P_EgB64yKBE',
            quote: 'Dealing With Online Bullying Is Hard',
        },
        {
            imgSrc: partynepal,
            companyName: 'Party Nepal',
            title: 'Youtube Stories: Elena Don',
            link: 'http://www.partynepal.com/detail/youtube-stories-elena-don',
            quote: "Youtuber Elena Don shares her journey as a vlogger and more in this month's Party Nepal Magazine! Let's get to know more about her.",
        },
        {
            imgSrc: annapurna,
            companyName: 'The Annapurna Express',
            title: 'Quick questions with Elena Gurung',
            link: 'https://theannapurnaexpress.com/news/quick-questions-with-elena-gurung-1364',
            quote: 'Viner/Actor: Next video on skinny friends complaining about weight gain.',
        },
    ];

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <div className='testimonials' id='testimonials'>
            <div className='container'>
                <div class="section-title">
                    <h2>More From Web</h2>
                    <span className='line'> </span>
                </div>
                <div className='content'>
                    <Carousel
                        swipeable={true}
                        draggable={true}
                        showDots={true}
                        responsive={responsive}
                        // ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={5000}
                        keyBoardControl={true}
                        customTransition="all .5"
                        transitionDuration={1000}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                        // deviceType={this.props.deviceType}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
                    >

                        {testimonialsData.map((testimonial, index) => (
                            <div className="card testimonial-item" key={index}>
                                <img src={testimonial.imgSrc} className="testimonial-img" alt={testimonial.title} />
                                <h3>{testimonial.companyName}</h3>
                                <h4>{testimonial.title}</h4>
                                <a href={testimonial.link} target="_blank" rel="noreferrer noopener">
                                    <p>
                                        <FontAwesomeIcon icon={faQuoteLeft} />
                                        {testimonial.quote}
                                        <FontAwesomeIcon icon={faQuoteRight} />
                                    </p>
                                </a>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
