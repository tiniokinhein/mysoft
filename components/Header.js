import React from 'react'
import Link from 'next/link'
import NavLink from './NavLink'
import { COLOR } from '../styles/color'
import Sticky from 'react-sticky-el'
import { AiOutlineMenu } from 'react-icons/ai'

const Header = () => {

    const clickOnMenu = () => {
        document.getElementById('sideBarMenu').classList.add('active-sidebar')
        
        document.body.style.position = 'absolute'
        document.body.style.height = '100vh'
        document.body.style.width = '100%'
        document.body.style.right = '0'
        document.body.style.overflowY = 'hidden'
    }

    return (
        <Sticky 
            stickyClassName="sticky-header-active" 
            className="sticky-header"
            topOffset={200}
        >
            <div 
                className="sticky-wrap"
                style={{
                    paddingTop: '0.7rem',
                    paddingBottom: '0.7rem'
                }}
            >
                <div className="container">
                    <div className="d-flex align-items-center">
                        <Link href="/" className="d-block" activeCla >
                            <a>
                                <img 
                                    src="/assets/images/logo.png"
                                    alt="My Soft - System and Solutions"
                                    width="130"
                                />
                            </a>
                        </Link>
                        <div className="ms-auto">
                            <button 
                                className="btn bg-transparent rounded-0 border-0 shadow-none p-0 d-block d-lg-none barMenu"
                                onClick={clickOnMenu}
                                style={{
                                    color: '#808080'
                                }}
                            >
                                <AiOutlineMenu size="1.4rem" />
                            </button>

                            <ul className="list-unstyled m-0 d-none d-lg-flex">
                                <li>
                                    <NavLink href="/" activeClassName="navlink-active">
                                        <a 
                                            className="text-decoration-none text-uppercase font-bold ps-5"
                                            style={{
                                                color: COLOR.D,
                                                fontSize: '14px',
                                                letterSpacing: '0.5px'
                                            }}
                                        >
                                            Home
                                        </a>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink href="/about-us" activeClassName="navlink-active">
                                        <a 
                                            className="text-decoration-none text-uppercase font-bold ps-5"
                                            style={{
                                                color: COLOR.D,
                                                fontSize: '14px',
                                                letterSpacing: '0.5px'
                                            }}
                                        >
                                            About Us
                                        </a>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink href="/products" activeClassName="navlink-active">
                                        <a 
                                            className="text-decoration-none text-uppercase font-bold ps-5"
                                            style={{
                                                color: COLOR.D,
                                                fontSize: '14px',
                                                letterSpacing: '0.5px'
                                            }}
                                        >
                                            Products
                                        </a>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink href="/services" activeClassName="navlink-active">
                                        <a 
                                            className="text-decoration-none text-uppercase font-bold ps-5"
                                            style={{
                                                color: COLOR.D,
                                                fontSize: '14px',
                                                letterSpacing: '0.5px'
                                            }}
                                        >
                                            Services
                                        </a>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink href="/enquiry" activeClassName="navlink-active">
                                        <a 
                                            className="text-decoration-none text-uppercase font-bold ps-5"
                                            style={{
                                                color: COLOR.D,
                                                fontSize: '14px',
                                                letterSpacing: '0.5px'
                                            }}
                                        >
                                            Enquiry
                                        </a>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink href="/contact-us" activeClassName="navlink-active">
                                        <a 
                                            className="text-decoration-none text-uppercase font-bold ps-5"
                                            style={{
                                                color: COLOR.D,
                                                fontSize: '14px',
                                                letterSpacing: '0.5px'
                                            }}
                                        >
                                            Contact Us
                                        </a>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Sticky>
    )
}

export default Header
