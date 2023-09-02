import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import search_img from '../assets/images/webp/search_img.webp'
import right_arrow from '../assets/images/webp/right_arrow.webp'
import phone from '../assets/images/webp/phone.png'
import mail from '../assets/images/webp/mail.png'
import home from '../assets/images/webp/home.png'
import twitter from '../assets/images/webp/Twitter.png'
import linked_in from '../assets/images/webp/linked_in.png'
import facebook from '../assets/images/webp/Facebook.png'
import { Link } from 'react-router-dom'
import { Cat, Instagram, Wordpress } from './Icon'


const Footer = () => {
    return (
        <div className='pt-5 mt-5'>
            <div className='overflow-hidden bg-black pt-5 position-relative'>
                <div className='mb-0'>
                    <Container className='pb-4'>
                        <div className='d-flex align-items-center justify-content-lg-end justify-content-center py-5 mt-5'>
                            <div className='footer_box'>
                                <div className='px-3 py-2 d-flex align-items-center justify-content-center'>
                                    <input type="text" placeholder='Search here....' id='fname' className='gilory fw-400 fs-16px p-2 outline w-100 mb-0' />
                                    <label htmlFor="fname"><img className='cursor' src={search_img} alt="" /></label>

                                </div>
                            </div>
                        </div>

                        <Row className='py-5'>
                            <Col lg={3} sm={6} className='py-5 py-lg-0' >
                                <ul>
                                    <li className='mb-0 text-white gilory fw-400 fs-16px mb-4'>Services</li>
                                    <li>
                                        <Link className='d-flex align-items-center gap-1'>
                                            <img src={right_arrow} alt="" />
                                            <p className='text_white mb-0 gilory fw-400 fs-16px'>WordPress Development</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className='d-flex align-items-center gap-1 pt-2'>
                                            <img src={right_arrow} alt="" />
                                            <p className='text_white mb-0 gilory fw-400 fs-16px'>WooCommerce Development</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className='d-flex align-items-center gap-1 pt-2'>
                                            <img src={right_arrow} alt="" />
                                            <p className='text_white mb-0 gilory fw-400 fs-16px'>WordPress Maintenance</p>
                                        </Link>

                                    </li>
                                    <li>
                                        <Link className='d-flex align-items-center gap-1 pt-2'>
                                            <img src={right_arrow} alt="" />
                                            <p className='text_white mb-0 gilory fw-400 fs-16px'>Speed Optimization</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className='d-flex align-items-center gap-1 pt-2'>
                                            <img src={right_arrow} alt="" />
                                            <p className='text_white mb-0 gilory fw-400 fs-16px'>Dedicated WordPress Developer</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className='d-flex align-items-center gap-1 pt-2'>
                                            <img src={right_arrow} alt="" />
                                            <p className='text_white mb-0 gilory fw-400 fs-16px'>Headless WordPress Development</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className='d-flex align-items-center gap-1 pt-2'>
                                            <img src={right_arrow} alt="" />
                                            <p className='text_white mb-0 gilory fw-400 fs-16px'>White Label Development</p>
                                        </Link>
                                    </li>
                                </ul>
                            </Col>

                            <Col lg={3} sm={6} className='py-5 py-lg-0' >
                                <ul>
                                    <li className='mb-0 text-white gilory fw-400 fs-16px mb-4'>Services</li>
                                    <li>
                                        <Link className='d-flex align-items-center gap-1'>
                                            <img src={right_arrow} alt="" />
                                            <p className='text_white mb-0 gilory fw-400 fs-16px'>WordPress Hosting</p>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link className='d-flex align-items-center gap-1 pt-2'>
                                            <img src={right_arrow} alt="" />
                                            <p className='text_white mb-0 gilory fw-400 fs-16px'>PSD, XD, Figma to WordPress</p>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link className='d-flex align-items-center gap-1 pt-2'>
                                            <img src={right_arrow} alt="" />
                                            <p className='text_white mb-0 gilory fw-400 fs-16px'>Custom WordPress Theme</p>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link className='d-flex align-items-center gap-1 pt-2'>
                                            <img src={right_arrow} alt="" />
                                            <p className='text_white mb-0 gilory fw-400 fs-16px'>Custom WordPress Plugins</p>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link className='d-flex align-items-center gap-1 pt-2'>
                                            <img src={right_arrow} alt="" />
                                            <p className='text_white mb-0 gilory fw-400 fs-16px'>CMS to WordPress</p>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link className='d-flex align-items-center gap-1 pt-2'>
                                            <img src={right_arrow} alt="" />
                                            <p className='text_white mb-0 gilory fw-400 fs-16px'>WordPress Malware Removal</p>
                                        </Link>
                                    </li>

                                </ul>
                            </Col>

                            <Col lg={3} sm={6} className='py-5 py-lg-0' >
                                <ul>
                                    <li className='mb-0 text-white gilory fw-400 fs-16px mb-4'>Latest Articles</li>
                                    <li>
                                        <Link className='d-flex align-items-center gap-1'>
                                            <img src={right_arrow} alt="" />
                                            <p className='text_white mb-0 gilory fw-400 fs-16px'>7 WordPress Plugins to Create an Effective Newsletter 03.01.2022</p>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link className='d-flex align-items-center gap-1 pt-4'>
                                            <img src={right_arrow} alt="" />
                                            <p className='text_white mb-0 gilory fw-400 fs-16px'>What’s the Perfect Blog Post Length for Your WordPress Site’s SEO?
                                                02.01.2022</p>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link className='d-flex align-items-center gap-1 pt-3'>
                                            <img src={right_arrow} alt="" />
                                            <p className='text_white mb-0 gilory fw-400 fs-16px'>5 Reasons the Future of WordPress Is Headless 01.01.2022</p>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link className='d-flex align-items-center gap-1 pt-4'>
                                            <img src={right_arrow} alt="" />
                                            <p className='text_white mb-0 gilory fw-400 fs-16px'>Viptor Says: Vipe Studio’s WordPress Developers Wrap Up the Amazingly Successful 2021 30.12.2021</p>
                                        </Link>
                                    </li>
                                </ul>
                            </Col>

                            <Col lg={3} sm={6} className='py-5 py-lg-0' >
                                <ul>
                                    <li className='mb-0 text-white gilory fw-400 fs-16px mb-4'>Contact</li>
                                    <li>
                                        <Link className='d-flex align-items-center gap-1'>
                                            <img src={phone} alt="" />
                                            <p className='text_white mb-0 gilory fw-400 fs-16px'>EU: +359 988 993 128</p>
                                        </Link>
                                    </li>


                                    <li>
                                        <Link className='d-flex align-items-center gap-1 pt-4'>
                                            <img src={phone} alt="" />
                                            <p className='text_white mb-0 gilory fw-400 fs-16px'>US: +1 (1 888) 266-6917</p>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link className='d-flex align-items-center gap-1 pt-4'>
                                            <img src={mail} alt="" />
                                            <p className='text_white mb-0 gilory fw-400 fs-16px'>office@vipestudio.com
                                            </p>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link className='d-flex align-items-center gap-1 pt-4'>
                                            <img src={home} alt="" />
                                            <p className='text_white mb-0 gilory fw-400 fs-16px'>14 Srebarna, Sofia 1407, Bulgaria</p>
                                        </Link>
                                    </li>
                                </ul>
                            </Col>
                        </Row>

                        <div className='footer_timeline'></div>
                        <div className='d-md-flex justify-content-between reverse'>
                            <div className='pt-5'>
                                <p className='mb-0 gilory fs-14px fw-400 text-white'>© Vipe Studio 2016-2022</p>
                                <div className='d-flex align-items-center gap-2'>
                                    <Link><p className='mb-0 gilory fs-14px fw-400 text_white'>Privacy <span>|</span></p></Link>
                                    <Link><p className='mb-0 gilory fs-14px fw-400 text_white'>Careers <span>|</span></p></Link>
                                    <Link><p className='mb-0 gilory fs-14px fw-400 text_white'>Media <span>|</span></p></Link>
                                    <Link><p className='mb-0 gilory fs-14px fw-400 text_white'>Client Area</p></Link>
                                </div>
                            </div>
                            <div className='d-flex align-items-center gap-3 pt-5'>
                                <Link><Cat /></Link>
                                <Link><img className='w_40' src={linked_in} alt="" /></Link>
                                <Link><img className='w_40' src={twitter} alt="" /></Link>
                                <Link><img className='w_40' src={facebook} alt="" /></Link>
                                <Link><Instagram /></Link>
                                <Link><Wordpress /></Link>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </div>
    )
}

export default Footer