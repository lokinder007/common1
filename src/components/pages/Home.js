import React from 'react'
import { Button } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'


const Home = () => {
    return (
        <>
            <section id="header" >
                <div className="col-md-11  ">
                    <div className="row justify-content-center align-items-center">

                        <div className="col-md-6  ">
                            <h1>
                                We Welcome's You In
                                <strong className="brand-name"> ReactApp</strong>
                            </h1>
                            <h2 className="my-3">
                                Here You Can Find Many Projects Which Will Make You Easier to Find Best Website Builder
                            </h2>
                            <div className="mt-3">
                                <Button variant="outline-primary" as={Link} to="/contact">Get Started</Button>{' '}
                                <Button variant='success' as={Link} to="/about">Get Started</Button>
                            </div>
                        </div>

                        <div className="col-md-5 ">
                            <lottie-player
                                // src="https://assets8.lottiefiles.com/packages/lf20_rnnlxazi.json"
                                src="https://assets3.lottiefiles.com/packages/lf20_XyoSty.json"
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
        </>
    )
}

export default Home