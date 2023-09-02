import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import team_img from '../assets/images/webp/team_img.webp'

const Team = () => {
    return (
        <div className='pb-5 mb-5' id='blog'>
            <div className='featured pb-4'>
                <Container className='mt-5'>
                    <Row className='align-items-center justify-content-center'>
                        <Col lg={6} className='pt-4 text-center text-lg-start' data-aos="fade-right" data-aos-delay="200" data-duration="2000" data-aos-easing="linear">
                            <h1 className='mb-0 Konexy fw-400 fs-48px'>Team Full of Stars	</h1>
                            <p className='mb-0 gilory fw-400 fs-16px'>Suspendisse consequat egestas arcu et et. Viverra quis euismod neque luctus bibendum. Fringilla in nibh fringilla vulputate in. Elit, ultricies vitae pulvinar arcu dignissim ac non rutrum. Lacus tortor sollicitudin risus eget euismod in bibendum turpis. </p>
                            <div className='pt-4'>
                                <p className='gilory btn_1 fw-600 fs-16px'>Explore</p>
                            </div>
                        </Col>
                        <Col lg={6} md={10} sm={10} xs={11} data-aos="zoom-in" data-aos-delay="200" data-duration="2000" data-aos-easing="linear">
                            <img className='w-100 translate-img' src={team_img} alt="" />
                        </Col>
                    </Row>

                </Container>
            </div>
        </div>
    )
}

export default Team