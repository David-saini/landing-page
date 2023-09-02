import React from 'react'
import { Link } from 'react-router-dom'
import { Cross, Earth, MenuIcon, Videoplayer } from '../components/Icon'
import { useState } from 'react';
import { Container, Dropdown, Row, Col } from 'react-bootstrap';
import group_img from '../assets/images/webp/group_img.webp'
import search_img from '../assets/images/webp/search_img.webp'
import Send_us from '../assets/images/webp/Send_us.png'
import bg_gradient from '../assets/images/webp/bg_gradient.png'



const Nav = () => {
    const [menu, setMenu] = useState(false);
    return (
        <div className='bg-black overflow-hidden position-relative'>
            <img className='poabsolute' src={bg_gradient} alt="" />
            <img className='poabsolute_2' src={bg_gradient} alt="" />
            <Container className='z-2 position-relative'>
                <div className='d-flex align-items-center justify-content-between justify-content-lg-end gap_160px pt-4'>
                    <div className={`${menu ? 'show-nav' : 'nav-fix'}`}>
                        <div className='d-lg-none crossset'
                            onClick={() => setMenu(false)}>
                            <Link><Cross /></Link>
                        </div>
                        <div className='d-flex gap_20px align-items-center'>
                            <Dropdown>
                                <Dropdown.Toggle className='dropdown text_white fw-400 gilory fs-16px'>
                                    WordPress Solution
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Item-1</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Item-2</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Item-3</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown>
                                <Dropdown.Toggle className='dropdown text_white fw-400 gilory fs-16px'>
                                    Services
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Item-1</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Item-2</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Item-3</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <a onClick={() => setMenu(false)} className='text_white  fw-400 gilory fs-16px' href='#About'>Portfolio</a>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic" className='dropdown text_white fw-400 gilory fs-16px'>
                                    About
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Item-1</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Item-2</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Item-3</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <a href="#blog" className='gilory fw-400 fs-16px text_white'>Blog</a>
                            <a onClick={() => setMenu(false)} className='d-lg-none text_white fw-400 gilory fs-16px' href='#order'>1 888 266-6917 (eu?)</a>
                        </div>
                    </div>
                    <div className='d-flex align-items-center gap_20px'>
                        <a onClick={() => setMenu(false)} className='d-none d-lg-block text_white  fw-400 gilory fs-16px' href='#order'>1 888 266-6917 (eu?)</a>
                        <button className='Contect_btn  fw-400 gilory fs-16px'>Contact Us</button>
                        <Dropdown>
                            <Dropdown.Toggle className='dropdown'>
                                <Earth />
                                <span className='text_white fw-400 gilory fs-16px'> Eng</span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Hin</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Panjabi</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Urdu</Dropdown.Item>
                                <Dropdown.Item href="#/action-4">Marathi</Dropdown.Item>
                                <Dropdown.Item href="#/action-5">Tamil</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                    </div>
                    <div className='d-lg-none '>
                        <Link onClick={() => setMenu(true)}>
                            <MenuIcon /></Link>
                    </div>

                </div>



                <Row className='align-items-center justify-content-lg-between justify-content-center py-5 my-5'>
                    <Col lg={6} data-aos="fade-right" data-aos-delay="200" data-duration="2000" data-aos-easing="linear">
                        <div className='position-relative'>
                            <h1 className='fw-400 Konexy fs-72px text-white text-lg-start text-center'>WordPress Development Agency</h1>
                        </div>
                        <p className='gilory fw-900 fs-24px text-white py-2'>for Enterprise + Friendly Team</p>
                        <p className='fw-400 gilory fs-16px text-white mb-0 opacity-75'>Vipe Studio is a WordPress Agency for development - a long-term partner for any WordPress service. Websites and,online shops development, maintenance and customization is what we do best.</p>
                        <div className='py-4 d-sm-flex align-items-center gap-4'>
                            <div className='mb-0 d-flex align-items-center justify-content-center'>
                                <button className='start_btn'>Get Started</button>
                            </div>
                            <div className='mb-0 pt-sm-0 pt-4 d-flex align-items-center justify-content-center'>
                                <Link><Videoplayer /><span className='text_white ps-3 opacity-75'>What is Vipe? (1min)</span></Link>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} className='py-5 py-lg-0' data-aos="fade-left" data-aos-delay="200" data-duration="2000" data-aos-easing="linear">
                        <img className='w_100 ps-lg-5 ms-lg-3 z-1' src={group_img} alt="" />
                    </Col>
                </Row>
            </Container>

            <div className='pt-5'>
                <div className='header_card'>
                    <Container>
                        <Row className='py-5'>

                            <Col lg={6} data-aos="fade-left" data-aos-delay="200" data-duration="2000" data-aos-easing="linear">
                                <h1 className='fw-400 fs-36px text-white Konexy'>Tell us more....</h1>
                                <p className='gilory fw-400 fs-16px text-white pe-3 pt-2'>Lectus vitae est ultrices sed. Sit aliquam commodo hac donec augue in quis. Magna vel orci sem neque fringilla et lectus laoreet.</p>
                            </Col>

                            <Col lg={6} data-aos="fade-right" data-aos-delay="200" data-duration="2000" data-aos-easing="linear">
                                <div className='d-flex align-items-center gap-2 py-2 py-lg-0'>
                                    <input type="text" placeholder='What do you need assistance with?' id='fname' className='gilory fw-400 fs-16px p-2 outline w-100 text-white mb-0 search_box ps-4 py-3' />
                                    <label htmlFor="fname"><img className='cursor' src={search_img} alt="" />
                                    </label>
                                </div>
                                <div className='d-sm-flex align-items-center justify-content-sm-between'>
                                    <Link className='pt-3'><img className='w_180px py-4 py-lg-0' src={Send_us} alt="" /></Link>
                                    <Link className='pt-4'><p className='gilory fw-400 fs-16px mb-0 text_white'>Learn more about...</p></Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    )
}

export default Nav