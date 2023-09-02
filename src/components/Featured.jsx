import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import yahoo_news from '../assets/images/webp/yahoo_news.webp'
import yahoo_finance from '../assets/images/webp/yahoo_finance.webp'
import trading_topics from '../assets/images/webp/trading_topics.webp'
import yahoo_life from '../assets/images/webp/yahoo_life.webp'


const Featured = () => {
    return (
        <div className='featured overflow-hidden'>
            <Container className='py-5 mt-4'>
                <h1 className='Konexy fw-400 fs-48px py-4' data-aos="zoom-in" data-aos-delay="500" data-duration="2000" data-aos-easing="linear">Featured on</h1>
                <div className='py-5 slider-container' data-aos="fade-up" data-aos-delay="200" data-duration="2000" data-aos-easing="linear">
                    <div className='d-flex align-items-center justify-content-between slider'>

                        <img className='w-140px' src={yahoo_news} alt="" />

                        <img className='w-140px' src={yahoo_finance} alt="" />

                        <img className='w-140px' src={yahoo_news} alt="" />

                        <img className='w-140px' src={trading_topics} alt="" />

                        <img className='w-140px' src={yahoo_life} alt="" />

                        <img className='w-140px' src={trading_topics} alt="" />

                        <img className='w-140px' src={yahoo_news} alt="" />

                        <img className='w-140px' src={yahoo_finance} alt="" />

                        <img className='w-140px' src={yahoo_news} alt="" />

                        <img className='w-140px' src={trading_topics} alt="" />

                        <img className='w-140px' src={yahoo_life} alt="" />

                        <img className='w-140px' src={trading_topics} alt="" />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Featured