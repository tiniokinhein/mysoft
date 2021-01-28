import React from 'react'
import Link from 'next/link'
import { COLOR } from '../styles/color'
import { FaFacebookF } from 'react-icons/fa'
import { GrLinkedinOption } from 'react-icons/gr'
import { IoLogoInstagram } from 'react-icons/io5'

const Footer = () => {
    return (
        <div
            className="py-5"
            style={{
                background: COLOR.A
            }}
        >
            <div className="container">
                <div className="mb-5">
                    <h4 
                        className="text-center font-bolder text-light mb-4"
                        style={{
                            fontSize: '3rem'
                        }}
                    >
                        Follow Us
                    </h4>
                    <div className="col-12 col-md-6 mx-auto px-0">
                        <div className="d-flex justify-content-center">
                            <Link href="/">
                                <a 
                                    className="text-decoration-none mx-2 text-center"
                                    style={{
                                        width: '60px',
                                        height: '60px',
                                        lineHeight: '60px',
                                        background: '#ffb81c',
                                        borderRadius: '1rem'
                                    }}
                                >
                                    <FaFacebookF size="2rem" color={COLOR.A} />
                                </a>
                            </Link>
                            <Link href="/">
                                <a 
                                    className="text-decoration-none mx-2 text-center"
                                    style={{
                                        width: '60px',
                                        height: '60px',
                                        lineHeight: '60px',
                                        background: '#ffb81c',
                                        borderRadius: '1rem'
                                    }}
                                >
                                    <GrLinkedinOption size="2rem" color={COLOR.A} />
                                </a>
                            </Link>
                            <Link href="/">
                                <a 
                                    className="text-decoration-none mx-2 text-center"
                                    style={{
                                        width: '60px',
                                        height: '60px',
                                        lineHeight: '60px',
                                        background: '#ffb81c',
                                        borderRadius: '1rem'
                                    }}
                                >
                                    <IoLogoInstagram size="2rem" color={COLOR.A} />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="">
                    <p
                        className="text-center text-light m-0"
                        style={{
                            fontSize: '0.85rem'
                        }}
                    >
                        Copyright &copy; {new Date().getFullYear()}
                        <Link href="/">
                            <a 
                                className="text-decoration-none text-uppercase font-bolder ms-2"
                                style={{
                                    fontSize: '1.1rem',
                                    color: '#fff'
                                }}
                            >
                                MySoft
                            </a>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
