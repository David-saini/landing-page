import React from 'react'
import Project_management from '../assets/images/webp/Project_management.webp'
import { Col, Container, Row } from 'react-bootstrap'

const Management = () => {
    return (
        <div className='overflow-hidden py-5'>
            <Container className='py-5'>
                <Row className='align-items-center justify-content-center'>
                    <Col lg={6} md={10} sm={10} xs={11} data-aos="zoom-in" data-aos-delay="200" data-duration="2000" data-aos-easing="linear">
                        <img className='w-100 py-5 py-lg-0' src={Project_management} alt="" />
                    </Col>

                    <Col lg={6} className='text-lg-start text-center' data-aos="fade-left" data-aos-delay="200" data-duration="2000" data-aos-easing="linear">
                        <h1 className='fw-400 fs-48px Konexy'><span className='purple'>Agile WordPress</span> Development Project management
                        </h1>

                        <p className='mb-0 fw-400 fs-16px gilory opacity-75'>Suspendisse consequat egestas arcu et et. Viverra quis euismod neque luctus bibendum. Fringilla in nibh fringilla vulputate in. Elit, ultricies vitae pulvinar arcu dignissim ac non rutrum. Lacus tortor sollicitudin risus eget euismod in bibendum turpis. </p>
                        <div className='pt-4'>
                            <p className='gilory btn_1 fw-600 fs-16px'>Explore</p>
                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default Management