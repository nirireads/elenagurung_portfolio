import React from 'react'
import './index.scss'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import danielwellington from '../../assets/img/portfolio/DanielWellington.svg'
import daraz from '../../assets/img/portfolio/daraz.jpg'
import fonepay from '../../assets/img/portfolio/fonepay.png'
import ime from '../../assets/img/portfolio/ime.png'
import ncell from '../../assets/img/portfolio/ncell.jpg'
import nic from '../../assets/img/portfolio/nic.png'
import oyo from '../../assets/img/portfolio/OYO.png'
import somersby from '../../assets/img/portfolio/somersby.png'
import viber from '../../assets/img/portfolio/viber.svg'


const Brands = () => {

    const portfolioData = [
        {
            name: "FonePay",
            description: "Mobile Banking App",
            image: fonepay,
            link: "https://www.fonepay.com/",
        },
        {
            name: "Daniel Wellington",
            description: "Watch Brand",
            image: danielwellington,
            link: "https://www.danielwellington.com/",
        },
        {
            name: "Daraz",
            description: "Ecommerce Website",
            image: daraz,
            link: "https://www.daraz.com.np/",
        },
        {
            name: "Somersby",
            description: "Beverage",
            image: somersby,
            link: "https://www.somersby.com/en/homepage",
        },
        {
            name: "OYO",
            description: "Hotel Services",
            image: oyo,
            link: "https://www.oyorooms.com/np/",
        },
        {
            name: "Viber",
            description: "Messaging Application",
            image: viber,
            link: "https://www.viber.com/",
        },
        {
            name: "Ncell",
            description: "Telecom",
            image: ncell,
            link: "https://www.ncell.axiata.com/",
        },
        {
            name: "IME Pay",
            description: "Finance",
            image: ime,
            link: "http://www.imepay.com.np/",
        },
        {
            name: "NIC Asia",
            description: "Banking",
            image: nic,
            link: "https://www.nicasiabank.com/",
        },
    ];

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 900 },
            items: 3,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 900, min: 464 },
            items: 2,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <div className='brands' id='brands'>
            <div className='container'>
                <div class="section-title">
                    <h2>Brands</h2>
                    <span className='line'> </span>
                    <p>Following are some of the major brands that I have worked with, for various projects that included but not only limited to marketing, promotion, and collaboration.</p>
                </div>
                <div className='content'>
                    <Carousel
                        swipeable={true}
                        draggable={true}
                        showDots={false}
                        responsive={responsive}
                        // ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={2500}
                        keyBoardControl={true}
                        customTransition="all 2s"
                        transitionDuration={1000}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                        // deviceType={this.props.deviceType}
                        // dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
                        focusOnSelect={true}
                    >

                        {portfolioData.map((item, index) => (
                            <div className="card brands-item" key={index}>
                                <a href={item.link} target="_blank" rel="noreferrer noopener">
                                    <img src={item.image} className="brands-img" alt={item.description} />
                                </a>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default Brands
