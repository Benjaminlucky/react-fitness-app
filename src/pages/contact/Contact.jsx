import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import './contact.css'




const Contact = () => {
    return (
        <>
            <Header title="Get in Touch" image={HeaderImage}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis beatae exercitationem eaque vel alias molestias.</p>
            </Header>
            <section className='contact'>
                <div className="container contact__container">
                    <div className="contact__wrapper">
                        <a href="mailto:bamidelebenjamin5@gmail.com" target="_blank" rel='noreferrer noopener'><MdEmail /></a>
                        <a href="http://m.me/harmony.benjamin" target="_blank" rel='noreferrer noopener'><BsMessenger /></a>
                        <a href="https://wa.me/+8053642425" target="_blank" rel='noreferrer noopener'><IoLogoWhatsapp /></a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact