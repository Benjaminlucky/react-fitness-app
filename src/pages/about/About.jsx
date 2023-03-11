
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import storyImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import missionImage from '../../images/about3.jpg'
import './about.css'



const  About = () => {
    return(
        <>
            <Header title="About Us" image={HeaderImage}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis sed rem, eligendi corporis sint at quos veniam dicta.
            </Header>

            <section className="about__story">
                <div className="container about__story-container">
                    <div className="about__section-image">
                        <img src={storyImage} alt="our story Image" />
                    </div>
                    <div className="about__section-content">
                        <h1>Our Story</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis earum perferendis aperiam quibusdam, adipisci velit dolorum harum recusandae ex architecto molestias cum optio suscipit vel nihil iste eum veritatis necessitatibus!</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic inventore quasi, labore aliquam numquam magnam at harum nostrum dolorem magni dolore perspiciatis quos, dolorum rem commodi. Maiores aspernatur molestias ipsa.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente aliquid at illum dolorum quisquam, quibusdam quia? Quo, reiciendis.</p>
                    </div>
                </div>
            </section>


            <section className="about__vision">
                <div className="container about__vision-container">
                    <div className="about__section-content">
                        <h1>Our Vision</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis earum perferendis aperiam quibusdam, adipisci velit dolorum harum recusandae ex architecto molestias cum optio suscipit vel nihil iste eum veritatis necessitatibus!</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic inventore quasi, labore aliquam numquam magnam at harum nostrum dolorem magni dolore perspiciatis quos, dolorum rem commodi. Maiores aspernatur molestias ipsa.</p>
                    </div>
                    <div className="about__section-image">
                        <img src={VisionImage} alt="our Vision Image" />
                    </div>
                </div>
            </section>


            <section className="about__mission">
                <div className="container about__mission-container">
                    <div className="about__section-image">
                        <img src={missionImage} alt="our Mission Image" />
                    </div>
                    <div className="about__section-content">
                        <h1>Our Mission</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis earum perferendis aperiam quibusdam, adipisci velit dolorum harum recusandae ex architecto molestias cum optio suscipit vel nihil iste eum veritatis necessitatibus!</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic inventore quasi, labore aliquam numquam magnam at harum nostrum dolorem magni dolore perspiciatis quos, dolorum rem commodi. Maiores aspernatur molestias ipsa.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente aliquid at illum dolorum quisquam, quibusdam quia? Quo, reiciendis.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About