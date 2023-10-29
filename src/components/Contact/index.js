// import { useEffect, useState } from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './index.scss'
// import Shoili from '../../assets/images/Shoili.jpg'

const Contact = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_gucx2a5', 'template_3n3ewvj', form.current, '270W6hD-erNJQG0fh')
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again')
                }
            )
    }

    return (
        <div id='contact' className='contact'>
            <div className="content contact-page">
                <div class="section-title">
                    <h2>Contact</h2>
                    <span className='line'> </span>
                </div>


                <div className="contact-form">
                    <form ref={form} onSubmit={sendEmail}>
                        <ul>
                            <li className="half">
                                <input placeholder="Name" type="text" name="name" required />
                            </li>
                            <li className="half">
                                <input
                                    placeholder="Email"
                                    type="email"
                                    name="email"
                                    required
                                />
                            </li>
                            <li>
                                <input
                                    placeholder="Subject"
                                    type="text"
                                    name="subject"
                                    required
                                />
                            </li>
                            <li>
                                <textarea
                                    placeholder="Message"
                                    name="message"
                                    required
                                ></textarea>
                            </li>
                            <li>
                                <input type="submit" className="flat-button" value="Send Message" />
                            </li>
                        </ul>
                    </form>

                </div>
            </div>
            {/* <img src={Shoili} alt='shoilipaints'/> */}
        </div>
    )
}

export default Contact
