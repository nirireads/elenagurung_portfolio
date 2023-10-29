import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons'
import CountUp from 'react-countup';

const MyNumbers = () => {
    return (
        <div className='facts' id='facts' >
            <div class="content">

                <div class="section-title">
                    <h2>Numbers</h2>
                    <span className='line'> </span>
                    <p>My Social Media and their Numbers</p>
                </div>

                <div class="row">
                    <div class="col-lg-3 col-md-6">
                        <div class="count-box">
                            <div className='icon-border'>
                                <FontAwesomeIcon icon={faInstagram} />
                            </div>
                            <span data-toggle="counter-up" id="instagram_followers" className='counter'>
                                <CountUp
                                    start={0}
                                    end={787239}
                                    duration={5}
                                    enableScrollSpy={true}
                                    scrollSpyOnce={true}
                                />
                            </span>
                            <span> Followers </span>
                            <p>Instagram</p>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 mt-5 mt-md-0">
                        <div class="count-box">
                            <div className='icon-border'>
                                <FontAwesomeIcon icon={faTiktok} />
                            </div>
                            <span data-toggle="counter-up" id="tiktok_followers" className='counter'>
                                <CountUp
                                    start={0}
                                    end={323129}
                                    duration={5}
                                    enableScrollSpy={true}
                                    scrollSpyOnce={true}
                                />
                            </span> <span> Followers </span>
                            <p>Tiktok</p>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
                        <div class="count-box">
                            <div className='icon-border'>
                                <FontAwesomeIcon icon={faYoutube} />
                            </div>
                            <span data-toggle="counter-up" id="youtube_followers" className='counter'>
                                <CountUp
                                    start={0}
                                    end={455339}
                                    duration={5}
                                    enableScrollSpy={true}
                                    scrollSpyOnce={true}
                                />
                            </span> <span> Subscribers </span>
                            <p>Youtube</p>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
                        <div class="count-box">
                            <div className='icon-border'>
                                <FontAwesomeIcon icon={faFacebook} />
                            </div>
                            <span data-toggle="counter-up" className='counter'>
                                <CountUp
                                    start={0}
                                    end={544339}
                                    duration={5}
                                    enableScrollSpy={true}
                                    scrollSpyOnce={true}
                                />
                            </span>
                            <span> Likes </span>
                            <p>Facebook</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default MyNumbers;