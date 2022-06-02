import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// import img from "../assets/images/C.png"

const About = () => {

    return (
        <Container>

            <section id="header">
                <div className="col-md-11  ">
                    <div className="row justify-content-center align-items-center">

                        <div className="col-md-6  ">
                            <h1>
                                Grow Your Business With
                                <strong className="brand-name"> Loki007</strong>
                            </h1>
                            <h2 className="my-3">
                                We are the team of talented developers
                            </h2>
                            <div className="mt-3">
                                {/* <NavLink to="/contact" className="btn ">
                                    Contact Us
                                </NavLink> */}
                                <Button variant='primary' as={Link} to="/contact">Contact Us</Button>
                                {/* <button className='btn'>Contact Us</button> */}
                            </div>
                        </div>

                        <div className="col-md-5 ">
                            <lottie-player
                                src="https://assets8.lottiefiles.com/packages/lf20_rnnlxazi.json"
                                // src="https://assets3.lottiefiles.com/packages/lf20_XyoSty.json"
                                background="transparent"
                                speed="1"
                                // style="width: 300px; height: 300px;"
                                loop
                                autoplay>

                            </lottie-player>
                        </div>

                    </div>
                </div>
            </section>
        </Container>
    )
}

export default About