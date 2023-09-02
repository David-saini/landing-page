import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Propy from '../assets/images/webp/Propy.webp'
import Ciela from '../assets/images/webp/Ciela.webp'
import Revuele from '../assets/images/webp/Revuele.webp'
import Spark from '../assets/images/webp/Spark.webp'

const Partner = () => {
    return (
        <div className='overflow-hidden py-5 featured'>
            <Container>
                <Row>
                    <Col lg={7} className='text-center text-lg-start' data-aos="zoom-in" data-aos-delay="200" data-duration="2000" data-aos-easing="linear">
                        <h1 className='Konexy fw-400 fs-48px'>Long Term WordPress Partner</h1>
                        <p className='mb-0 gilory fs-16px fw-400'>Our motto is the long-term partnership – we will not only develop your perfect website, but will be behind you through the whole process. They already trusted us:</p>
                    </Col>
                </Row>

                <div className='py-5 slider-container' data-aos="fade-down" data-aos-delay="200" data-duration="2000" data-aos-easing="linear">
                    <div className='d-flex align-items-center justify-content-between slider'>

                        <img className='w-140px' src={Propy} alt="" />

                        <img className='w-140px' src={Ciela} alt="" />

                        <img className='w-140px' src={Revuele} alt="" />

                        <img className='w-140px' src={Ciela} alt="" />

                        <img className='w-140px' src={Spark} alt="" />

                        <img className='w-140px' src={Ciela} alt="" />

                        <img className='w-140px' src={Propy} alt="" />

                        <img className='w-140px' src={Ciela} alt="" />

                        <img className='w-140px' src={Revuele} alt="" />

                        <img className='w-140px' src={Ciela} alt="" />

                        <img className='w-140px' src={Spark} alt="" />

                        <img className='w-140px' src={Ciela} alt="" />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Partner