import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Gradient_card = () => {
    return (
        <div>
            <Container className='position-relative'>
                <div className=' Gradient_card card_absolute z-1'>
                    <div className='d-lg-flex align-items-center justify-content-between'>
                        <div className='ps-4 ms-2 pt-3 pb-5' data-aos="zoom-in" data-aos-delay="200" data-duration="2000" data-aos-easing="linear">
                            <h1 className='text-white fw-400 Konexy fs-48px'>Have you</h1>
                            <p className='text-white fw-600 gilory max_630px fs-24px'>read our study about Speed and Performance in WordPress?</p>
                        </div>
                        <div className='pe-4 me-2 pt-3 pb-5 d-flex align-items-center justify-content-center' data-aos="zoom-out" data-aos-delay="200" data-duration="2000" data-aos-easing="linear">
                            <Link className='btn_4 gilory fw-600 fs-16px'>Check It Out</Link>
                        </div>
                    </div>
                </div>

            </Container>
        </div>
    )
}

export default Gradient_card