import React from 'react'
import NavLink from './NavLink'
import { COLOR } from '../styles/color'
import { GrClose } from 'react-icons/gr'

const SideBar = () => {

    const closeOnMenu = () => {
        document.getElementById('sideBarMenu').classList.remove('active-sidebar')

        document.body.style.position = ''
        document.body.style.height = ''
        document.body.style.width = ''
        document.body.style.right = ''
        document.body.style.overflowY = ''
    }

    return (
        <div 
            id="sideBarMenu"
            className="position-fixed w-100"
            onClick={closeOnMenu}
        >
            <div className="col-12 col-sm-8 col-md-4 ms-auto p-5 bg-white h-100 position-relative shadow-lg">
                <button 
                    className="btn rounded-0 border-0 shadow-none p-0 position-absolute bg-transparent"
                    onClick={closeOnMenu}
                    style={{
                        right: '33px',
                        top: '1.15rem',
                        opacity: 0,
                        transition: '0.1s linear'
                    }}
                >
                    <GrClose size="1.4rem" color="#000" />
                </button>
                <ul className="list-unstyled m-0 d-flex flex-column h-100">
                    <li>
                        <NavLink href="/" activeClassName="navlink-active">
                            <a 
                                className="text-decoration-none text-uppercase font-bold d-inline-block mb-4"
                                style={{
                                    color: COLOR.D,
                                    fontSize: '20px',
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
                                className="text-decoration-none text-uppercase font-bold d-inline-block mb-4"
                                style={{
                                    color: COLOR.D,
                                    fontSize: '20px',
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
                                className="text-decoration-none text-uppercase font-bold d-inline-block mb-4"
                                style={{
                                    color: COLOR.D,
                                    fontSize: '20px',
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
                                className="text-decoration-none text-uppercase font-bold d-inline-block mb-4"
                                style={{
                                    color: COLOR.D,
                                    fontSize: '20px',
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
                                className="text-decoration-none text-uppercase font-bold d-inline-block mb-4"
                                style={{
                                    color: COLOR.D,
                                    fontSize: '20px',
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
                                className="text-decoration-none text-uppercase font-bold d-inline-block mb-4"
                                style={{
                                    color: COLOR.D,
                                    fontSize: '20px',
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
    )
}

export default SideBar
