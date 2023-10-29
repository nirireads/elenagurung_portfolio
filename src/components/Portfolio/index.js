import './index.scss';

import youtube from '../../assets/img/socialmedia/youtube.png'
import instagram from '../../assets/img/socialmedia/instagram.png'
import facebook from '../../assets/img/socialmedia/facebook.png'
import tiktok from '../../assets/img/socialmedia/tiktok.png'

const Portfolio = () => {
    const portfolioData = [
        {
            imageSrc: instagram,
            title: 'Instagram',
            link: 'https://www.instagram.com/elenadon_/',
            username: '@elenadon_',
        },
        {
            imageSrc: youtube,
            title: 'YouTube',
            link: 'https://www.youtube.com/channel/UCvKGxmYGLOyY1I2iZ6-DC0g',
            username: 'Elena Don',
        },
        {
            imageSrc: tiktok,
            title: 'TikTok',
            link: 'https://www.tiktok.com/@elenadon_',
            username: '@elenadon',
        },
        {
            imageSrc: facebook,
            title: 'Facebook',
            link: 'https://www.facebook.com/elenadon2/',
            username: 'Elena Don',
        },
    ];
    return (
        <div className='portfolio' id='portfolio' >
            <div class="content">

                <div class="section-title">
                    <h2>Portfolio</h2>
                    <span className='line'> </span>
                    <p>You can connect with me via any of the following social media platforms.</p>
                </div>


                <div className="row portfolio-containter">
                    {portfolioData.map(item => (
                        <div class="portfolio-wrap">
                            <span>
                                <img src={item.imageSrc} class="img-fluid" alt={item.title} />
                                <a href={item.link} target="blank" rel="noreferrer noopener">
                                    <div class="portfolio-info">
                                        <h4>{item.title}</h4>
                                        <p>{item.username}</p>
                                    </div>
                                </a>
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>


    );
}

export default Portfolio;