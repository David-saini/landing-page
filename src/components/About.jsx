import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
import featured_1 from '../assets/images/webp/featured_1.webp'
import featured_2 from '../assets/images/webp/featured_2.png'
import featured_3 from '../assets/images/webp/featured_3.png'

const About = () => {
    return (
        <div className='py-5 overflow-hidden' id='About'>
            <Container className='pb-5 mb-5'>
                <h1 className='fw-400 fs-48px Konexy py-5' data-aos="zoom-in" data-aos-delay="200" data-duration="2000" data-aos-easing="linear">Integer et nisl non</h1>
                <Row>

                    <Col lg={4} md={6} className='d-flex align-items-center justify-content-center' data-aos="flip-left" data-aos-delay="200" data-duration="2000" data-aos-easing="linear">
                        <div className='featured_card'>
                            <div className='d-flex align-items-center justify-content-center'>
                                <img src={featured_1} alt="" />
                            </div>
                            <div className='d-flex align-items-center justify-content-center text-center'>
                                <h1 className='inter fw-600 fs-24px pt-3 pb-1 mt-4'>Enterprise WordPress Solutions	</h1>
                            </div>
                            <div className='d-flex align-items-center justify-content-center text-center'>
                                <p className='gilory fw-400 fs-16px light-grey opacity-75'>Pretium, a et sapien non nunc libero. Id dolor sed quis convallis turpis purus feugiat nibh eu. Auctor cras hac ac, sociis diam montes, turpis commodo elit.	</p>
                            </div>
                            <Link className='d-flex align-items-center justify-content-center text-center'>
                                <p className='gilory fw-400 fs-16px purple'>Learn More</p>
                            </Link>

                        </div>
                    </Col>

                    <Col lg={4} md={6} className='d-flex align-items-center justify-content-center pt-3 pt-md-0' data-aos="flip-down" data-aos-delay="200" data-duration="2000" data-aos-easing="linear">
                        <div className='featured_card'>
                            <div className='d-flex align-items-center justify-content-center'>
                                <img src={featured_2} alt="" />
                            </div>
                            <div className='d-flex align-items-center justify-content-center text-center'>
                                <h1 className='inter fw-600 fs-24px pt-3 pb-1 mt-4'>Enterprise WordPress Solutions	</h1>
                            </div>
                            <div className='d-flex align-items-center justify-content-center text-center'>
                                <p className='gilory fw-400 fs-16px light-grey opacity-75'>Pretium, a et sapien non nunc libero. Id dolor sed quis convallis turpis purus feugiat nibh eu. Auctor cras hac ac, sociis diam montes, turpis commodo elit.	</p>
                            </div>
                            <Link className='d-flex align-items-center justify-content-center text-center'>
                                <p className='gilory fw-400 fs-16px purple'>Learn More</p>
                            </Link>

                        </div>
                    </Col>

                    <Col lg={4} md={6} className='d-flex align-items-center justify-content-center pt-3 pt-lg-0' data-aos="flip-right" data-aos-delay="200" data-duration="2000" data-aos-easing="linear">
                        <div className='featured_card'>
                            <div className='d-flex align-items-center justify-content-center'>
                                <img src={featured_3} alt="" />
                            </div>
                            <div className='d-flex align-items-center justify-content-center text-center'>
                                <h1 className='inter fw-600 fs-24px pt-3 pb-1 mt-4'>Enterprise WordPress Solutions	</h1>
                            </div>
                            <div className='d-flex align-items-center justify-content-center text-center'>
                                <p className='gilory fw-400 fs-16px light-grey opacity-75'>Pretium, a et sapien non nunc libero. Id dolor sed quis convallis turpis purus feugiat nibh eu. Auctor cras hac ac, sociis diam montes, turpis commodo elit.	</p>
                            </div>
                            <Link className='d-flex align-items-center justify-content-center text-center'>
                                <p className='gilory fw-400 fs-16px purple'>Learn More</p>
                            </Link>

                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default About