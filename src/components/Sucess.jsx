import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Sucess_img from '../assets/images/webp/Sucess_img.webp'
import Sucess_img_1 from '../assets/images/webp/Sucess_img_1.webp'

const Sucess = () => {
    return (
        <div className='py-5'>
            <Container className='py-5 position-relative'>
                <Row className='d-flex align-items-center justify-content-center'>
                    <Col lg={4} md={9} sm={10} xs={11} className='py-5 py-lg-0' data-aos="zoom-in" data-aos-delay="200" data-duration="2000" data-aos-easing="linear">
                        <img className='w-100' src={Sucess_img} alt="" />
                    </Col>
                    <Col lg={8}>
                        <p className='gilory fs-16px fw-400 mb-0 opacity-75' data-aos="zoom-out" data-aos-delay="200" data-duration="2000" data-aos-easing="linear">HAVE YOU SEEN OUR MASCOT?</p>
                        <h1 className='fs-48px Konexy fw-400' data-aos="zoom-out" data-aos-delay="200" data-duration="2000" data-aos-easing="linear">Success Guides</h1>

                        <div className='d-md-flex align-items-center gap-2' data-aos="zoom-out" data-aos-delay="200" data-duration="2000" data-aos-easing="linear">
                            <div className='d-sm-flex align-items-center justify-content-center'>
                                <button className='px-3 py-2 btn-2 gilory fw-400 fs-16px'>Category-1</button>
                                <button className='px-3 py-2 btn-2 gilory fw-400 fs-16px ms-2'>Category-2</button>
                            </div>
                            <div className='d-sm-flex align-items-center justify-content-center pt-2 pt-md-0'>
                                <button className='px-3 py-2 btn-2 gilory fw-400 fs-16px'>Category-3</button>
                                <button className='px-3 py-2 btn-2 gilory fw-400 fs-16px ms-2'>Category-4</button>
                            </div>
                        </div>

                        <div className='pt-5 d-sm-flex align-items-center justify-content-center gap-3 mb-5'>


                            <div className='sucess_card' data-aos="flip-right" data-aos-delay="200" data-duration="2000" data-aos-easing="linear">
                                <img className='w-100 px-2 py-2' src={Sucess_img_1} alt="" />
                                <h1 className='gilory fw-600 fs-24px px-2'>Sit diam metus</h1>
                                <p className='gilory fw-400 fs-16px px-2 opacity-75'>Arcu amet, consectetur vel pellentesque mattis ipsum sed mattis sed.</p>
                                <p className='mb-0 gilory fw-600 fs-16px px-2 purple pb-3'>Read More....</p>
                            </div>

                            <div className='sucess_card my-3 my-md-0' data-aos="flip-right" data-aos-delay="200" data-duration="2000" data-aos-easing="linear">
                                <img className='w-100 px-2 py-2' src={Sucess_img_1} alt="" />
                                <h1 className='gilory fw-600 fs-24px px-2'>Sit diam metus</h1>
                                <p className='gilory fw-400 fs-16px px-2 opacity-75'>Arcu amet, consectetur vel pellentesque mattis ipsum sed mattis sed.</p>
                                <p className='mb-0 gilory fw-600 fs-16px px-2 purple pb-3'>Read More....</p>
                            </div>


                            <div className='sucess_card' data-aos="flip-right" data-aos-delay="200" data-duration="2000" data-aos-easing="linear">
                                <img className='w-100 px-2 py-2' src={Sucess_img_1} alt="" />
                                <h1 className='gilory fw-600 fs-24px px-2'>Sit diam metus</h1>
                                <p className='gilory fw-400 fs-16px px-2 opacity-75'>Arcu amet, consectetur vel pellentesque mattis ipsum sed mattis sed.</p>
                                <p className='mb-0 gilory fw-600 fs-16px px-2 purple pb-3'>Read More....</p>
                            </div>

                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Sucess