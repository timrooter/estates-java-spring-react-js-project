import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Footer from "./Footer";
import './AboutUs.css'

class About extends React.Component {
    render() {
        return (
            <div>
                <div className="about-us-container">
                    <div className="about-us-content">
                        <h2>О нас</h2>
                        <p>Мы — ваш надежный партнер в мире недвижимости. Dixon Estate специализируется на предоставлении первоклассной недвижимости от лучших застройщиков. Наша цель — помочь вам найти идеальное жилье, соответствующее вашим желаниям и потребностям.</p>
                        
                        <p>Наши ценности - Профессионализм и Качество. Мы команда экспертов, готовых предоставить вам самую актуальную информацию о недвижимости от ведущих застройщиков. Наши специалисты всегда готовы помочь вам сделать осознанный выбор.</p>
                        <p>Выбирая Dixon Estate, вы выбираете опыт и профессионализм в мире недвижимости. Мы готовы помочь вам осуществить вашу мечту о идеальном жилье. Свяжитесь с нами сегодня, и мы поможем вам начать ваш путь к новому дому.</p>

                        <div className="social-icons">
                            <a href="facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                            <a href="twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                            <a href="instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        </div>
                    </div>
                    <div className="about-us-image">
                        <img src="https://media.cnn.com/api/v1/images/stellar/prod/221124121454-01-steinway-skyscaper-restricted.jpg?c=original" alt="О нас" />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default About;
