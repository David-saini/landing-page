import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import bi_patch_check_fill from '../assets/images/webp/bi_patch-check-fill.png'
import bg_gradient from '../assets/images/webp/bg_gradient.png'
import check from '../assets/images/webp/check.png'
import girl_img from '../assets/images/webp/girl_img.png'

const Services = () => {
    return (
        <div className='bg-black overflow-hidden py-5  position-relative'>
            <img className='shadow_1' src={bg_gradient} alt="" />
            <img className='shadow_2' src={bg_gradient} alt="" />
            <Container className='z-2 position-relative'>
                <Row className='pb-5'>
                    <Col lg={5} data-aos="fade-right" data-aos-delay="200" data-duration="2000" data-aos-easing="linear">
                        <h1 className='fw-400 Konexy fs-40px text-white'>All Vipe Studio WordPress services include:</h1>
                    </Col>
                    <Col lg={7} data-aos="fade-left" data-aos-delay="200" data-duration="2000" data-aos-easing="linear">
                        <div className='d-md-flex align-items-center justify-content-md-between justify-content-center'>
                            <ul className='pt-5 pt-md-0'>
                                <li className='text-white gilory fw-600 fs24px'>By Industry</li>
                                <li className='text-white gilory fw-400 fs-16px pt-3'><span><img src={bi_patch_check_fill} alt="" /></span> Lorem in elementum pellentesque</li>
                                <li className='text-white gilory fw-400 fs-16px pt-2'><span><img src={bi_patch_check_fill} alt="" /></span> Molestie cursus praesent mi</li>
                                <li className='text-white gilory fw-400 fs-16px pt-2'><span><img src={bi_patch_check_fill} alt="" /></span> Leo sed viverra cras</li>
                                <li className='text-white gilory fw-400 fs-16px pt-2'><span><img src={bi_patch_check_fill} alt="" /></span> Laoreet feugiat ut at</li>
                                <li className='text-white gilory fw-400 fs-16px pt-2'><span><img src={bi_patch_check_fill} alt="" /></span> Risus aliquam molestie viverra</li>
                                <li className='text-white gilory fw-400 fs-16px pt-2'><span><img src={bi_patch_check_fill} alt="" /></span> Diam enim pulvinar velit</li>
                            </ul>

                            <ul className='pt-5 pt-md-0'>
                                <li className='text-white gilory fw-600 fs24px'>By Services</li>
                                <li className='text-white gilory fw-400 fs-16px pt-3'><span><img src={bi_patch_check_fill} alt="" /></span>Accumsan, dui a semper</li>
                                <li className='text-white gilory fw-400 fs-16px pt-2'><span><img src={bi_patch_check_fill} alt="" /></span>Interdum malesuada vulputate neque</li>
                                <li className='text-white gilory fw-400 fs-16px pt-2'><span><img src={bi_patch_check_fill} alt="" /></span> Nullam non a, morbi</li>
                                <li className='text-white gilory fw-400 fs-16px pt-2'><span><img src={bi_patch_check_fill} alt="" /></span> Arcu morbi leo eu</li>
                                <li className='text-white gilory fw-400 fs-16px pt-2'><span><img src={bi_patch_check_fill} alt="" /></span> Viverra venenatis, in ornare</li>
                                <li className='text-white gilory fw-400 fs-16px pt-2'><span><img src={bi_patch_check_fill} alt="" /></span> Erat id aliquam habitant</li>
                            </ul>

                        </div>
                    </Col>
                </Row>

                <div className='pt_5'>
                    <div className='service_card z-1'>
                        <Row className=' align-items-center justify-content-lg-between justify-content-center'>
                            <Col lg={4} data-aos="zoom-in" data-aos-delay="200" data-duration="2000" data-aos-easing="linear">
                                <p className='fw-400 mb-0 fs-35px Konexy text-white px-3'>Not Sure which service you need yet?</p>
                                <div className='pt-3'>
                                    <p className='mb-0 btn_3 gilory fw-600 fs-16px'>Schedule An Appointment</p>
                                </div>
                            </Col>

                            <Col lg={4} md={7} className='py-5 py-lg-0' data-aos="zoom-out" data-aos-delay="200" data-duration="2000" data-aos-easing="linear">
                                <p className='fw-400 fs-24px gilory text-white mb-4 '>20-m free consultation that will help us identifyif  you need</p>
                                <ul>
                                    <li className='pt-2 text-white gilory fs-16px fw-400'><span><img className='pe-2' src={check} alt="" /></span>Technical Description & Discovery</li>
                                    <li className='pt-2 text-white gilory fs-16px fw-400'><span><img className='pe-2' src={check} alt="" /></span>Custom WordPress Development</li>
                                    <li className='pt-2 text-white gilory fs-16px fw-400'><span><img className='pe-2' src={check} alt="" /></span>Support & Maintenance</li>
                                    <li className='pt-2 text-white gilory fs-16px fw-400'><span><img className='pe-2' src={check} alt="" /></span>Other WordPress Service	</li>
                                </ul>
                            </Col>

                            <Col lg={3} md={5} data-aos="zoom-in" data-aos-delay="200" data-duration="2000" data-aos-easing="linear">
                                <img className='w-100 pe-2' src={girl_img} alt="" />
                            </Col>
                        </Row>
                    </div>

                </div>
            </Container >
        </div >
    )
}

export default Services