import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import { COLOR } from '../styles/color'
import { 
    FaBriefcase, 
    FaBuilding, 
    FaComment, 
    FaEnvelope, 
    FaMap, 
    FaMobileAlt, 
    FaUsers, 
    FaUserTie 
} from 'react-icons/fa'

const Enquiry = () => {

    const [state,setState] = React.useState({
        inventory_system: '',
        ecommerce_system: '',
        erp_system: '',
        hr_system: '',
        core_banking_system: '',
        web_design_system: '',
        company_name: '',
        company_type: '',
        company_size: '',
        customer_name: '',
        contact_email: '',
        contact_phone: '',
        contact_address: '',
        message: ''
    })

    const hdOnChange = e => {
        setState(value => ({
            ...value,
            [e.target.name]: e.target.value
        }))
    }

    const hdOnSubmit = e => {
        e.preventDefault()
    }

    const pageHeader = (
        <div
            className="position-relative bg-light"
            style={{
                // background: "url(" + p.image + ") no-repeat center / cover fixed",
                height: '50vh',
                minHeight: '300px'
            }}
        >
            <div 
                className="position-absolute"
                style={{
                    left: 0,
                    top: '50%',
                    right: 0,
                    transform: 'translateY(-50%)'
                }}
            >
                <div className="container">
                    <h4 
                        className="m-0 font-bolder text-uppercase text-dark"
                        style={{
                            fontSize: '2.5rem',
                            letterSpacing: '0.5px'
                        }}
                    >
                        Enquiry
                    </h4>
                </div>
            </div>
        </div>
    )

    const formList = (
        <div className="py-5 bg-white">
            <div className="container py-5">
                <form
                    className="w-100"
                    onSubmit={hdOnSubmit}
                    autoComplete="off"
                >
                    <div className="field-group mb-4">
                        <div className="row">
                            <div 
                                className="custom-control custom-checkbox col-12 col-sm-6 col-lg-4 py-2"
                            >
                                <input 
                                    type="checkbox" 
                                    className="custom-control-input position-relative bg-light" 
                                    id="inventory_system"
                                    name="inventory_system"
                                    value="Inventory System"
                                    onChange={
                                    (e) => {
                                        if(!state.inventory_system) {
                                            setState(value => ({
                                                ...value,
                                                inventory_system: e.target.value
                                            }))
                                        } else {
                                                setState(value => ({
                                                    ...value,
                                                    inventory_system: ''
                                                }))
                                            }
                                        }
                                    }
                                />
                                <label 
                                    className="custom-control-label text-dark cu-input-checkbox font-bold" 
                                    htmlFor="inventory_system" 
                                    style={{
                                        fontSize: '18px',
                                        letterSpacing: '0.5px',
                                        paddingLeft: '35px'
                                    }}
                                >   
                                    Inventory System
                                </label>
                            </div>

                            <div 
                                className="custom-control custom-checkbox col-12 col-sm-6 col-lg-4 py-2"
                            >
                                <input 
                                    type="checkbox" 
                                    className="custom-control-input position-relative bg-light" 
                                    id="ecommerce_system"
                                    name="ecommerce_system"
                                    value="Ecommerce System"
                                    onChange={
                                        (e) => {
                                            if(!state.ecommerce_system) {
                                                setState(value => ({
                                                    ...value,
                                                    ecommerce_system: e.target.value
                                                }))
                                            } else {
                                                setState(value => ({
                                                    ...value,
                                                    ecommerce_system: ''
                                                }))
                                            }
                                        }
                                    }
                                />
                                <label 
                                    className="custom-control-label text-dark cu-input-checkbox font-bold" 
                                    htmlFor="ecommerce_system" 
                                    style={{
                                        fontSize: '18px',
                                        letterSpacing: '0.5px',
                                        paddingLeft: '35px'
                                    }}
                                >   
                                    Ecommerce System
                                </label>
                            </div>

                            <div 
                                className="custom-control custom-checkbox col-12 col-sm-6 col-lg-4 py-2"
                            >
                                <input 
                                    type="checkbox" 
                                    className="custom-control-input position-relative bg-light" 
                                    id="erp_system"
                                    name="erp_system"
                                    value="ERP System"
                                    onChange={
                                        (e) => {
                                            if(!state.erp_system) {
                                                setState(value => ({
                                                    ...value,
                                                    erp_system: e.target.value
                                                }))
                                            } else {
                                                setState(value => ({
                                                    ...value,
                                                    erp_system: ''
                                                }))
                                            }
                                        }
                                    }
                                />
                                <label 
                                    className="custom-control-label text-dark cu-input-checkbox font-bold" 
                                    htmlFor="erp_system" 
                                    style={{
                                        fontSize: '18px',
                                        letterSpacing: '0.5px',
                                        paddingLeft: '35px'
                                    }}
                                >   
                                    ERP System
                                </label>
                            </div>

                            <div 
                                className="custom-control custom-checkbox col-12 col-sm-6 col-lg-4 py-2"
                            >
                                <input 
                                    type="checkbox" 
                                    className="custom-control-input position-relative bg-light" 
                                    id="hr_system"
                                    name="hr_system"
                                    value="HR System"
                                    onChange={
                                        (e) => {
                                            if(!state.hr_system) {
                                                setState(value => ({
                                                    ...value,
                                                    hr_system: e.target.value
                                                }))
                                            } else {
                                                setState(value => ({
                                                    ...value,
                                                    hr_system: ''
                                                }))
                                            }
                                        }
                                    }
                                />
                                <label 
                                    className="custom-control-label text-dark cu-input-checkbox font-bold" 
                                    htmlFor="hr_system" 
                                    style={{
                                        fontSize: '18px',
                                        letterSpacing: '0.5px',
                                        paddingLeft: '35px'
                                    }}
                                >   
                                    HR System
                                </label>
                            </div>

                            <div 
                                className="custom-control custom-checkbox col-12 col-sm-6 col-lg-4 py-2"
                            >
                                <input 
                                    type="checkbox" 
                                    className="custom-control-input position-relative bg-light" 
                                    id="core_banking_system"
                                    name="core_banking_system"
                                    value="Core Banking System"
                                    onChange={
                                        (e) => {
                                            if(!state.core_banking_system) {
                                                setState(value => ({
                                                    ...value,
                                                    core_banking_system: e.target.value
                                                }))
                                            } else {
                                                setState(value => ({
                                                    ...value,
                                                    core_banking_system: ''
                                                }))
                                            }
                                        }
                                    }
                                />
                                <label 
                                    className="custom-control-label text-dark cu-input-checkbox font-bold" 
                                    htmlFor="core_banking_system" 
                                    style={{
                                        fontSize: '18px',
                                        letterSpacing: '0.5px',
                                        paddingLeft: '35px'
                                    }}
                                >   
                                    Core Banking System
                                </label>
                            </div>

                            <div 
                                className="custom-control custom-checkbox col-12 col-sm-6 col-lg-4 py-2"
                            >
                                <input 
                                    type="checkbox" 
                                    className="custom-control-input position-relative bg-light" 
                                    id="web_design_system"
                                    name="web_design_system"
                                    value="Web Design"
                                    onChange={
                                        (e) => {
                                            if(!state.web_design_system) {
                                                setState(value => ({
                                                    ...value,
                                                    web_design_system: e.target.value
                                                }))
                                            } else {
                                                setState(value => ({
                                                    ...value,
                                                    web_design_system: ''
                                                }))
                                            }
                                        }
                                    }
                                />
                                <label 
                                    className="custom-control-label text-dark cu-input-checkbox font-bold" 
                                    htmlFor="web_design_system" 
                                    style={{
                                        fontSize: '18px',
                                        letterSpacing: '0.5px',
                                        paddingLeft: '35px'
                                    }}
                                >   
                                    Web Design
                                </label>
                            </div>
                        </div>
                    </div>
                    
                    <div className="field-group mb-3">
                        <div className="row">                                    
                            <div className="col-12 col-md-6 mb-3 mb-md-0 position-relative">
                                <span
                                    className="position-absolute text-secondary"
                                    style={{
                                        left: '1.5rem',
                                        top: '50%',
                                        transform: 'translateY(-50%)'
                                    }}
                                >
                                    <FaBuilding />
                                </span>
                                <input
                                    type="text"
                                    placeholder="Company Name"
                                    className="form-control rounded-1 shadow-none bg-transparent px-3 ps-5"
                                    style={{
                                        height: '50px',
                                        borderColor: COLOR.A,
                                        color: COLOR.A
                                    }}
                                    name="company_name"
                                    id="company_name"
                                    value={state.company_name}
                                    onChange={hdOnChange}
                                />
                            </div>
                            <div className="col-12 col-md-6 position-relative">
                                <span
                                    className="position-absolute text-secondary"
                                    style={{
                                        left: '1.5rem',
                                        top: '50%',
                                        transform: 'translateY(-50%)'
                                    }}
                                >
                                    <FaBriefcase />
                                </span>
                                <input
                                    type="text"
                                    placeholder="Company Type"
                                    className="form-control rounded-1 shadow-none bg-transparent px-3 ps-5"
                                    style={{
                                        height: '50px',
                                        borderColor: COLOR.A,
                                        color: COLOR.A
                                    }}
                                    name="company_type"
                                    id="company_type"
                                    value={state.company_type}
                                    onChange={hdOnChange}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="field-group mb-3">
                        <div className="row">                                    
                            <div className="col-12 col-md-6 mb-3 mb-md-0 position-relative">
                                <span
                                    className="position-absolute text-secondary"
                                    style={{
                                        left: '1.5rem',
                                        top: '50%',
                                        transform: 'translateY(-50%)'
                                    }}
                                >
                                    <FaUsers />
                                </span>
                                <select 
                                    className="custom-select rounded-1 shadow-none bg-transparent px-3 ps-5 w-100"
                                    style={{
                                        height: '50px',
                                        borderColor: COLOR.A,
                                        color: COLOR.A
                                    }}
                                    name="company_size"
                                    id="company_size"
                                    value={state.company_size}
                                    onChange={hdOnChange}
                                >
                                    <option value="No select size">Company Size</option>
                                    <option value="Under 10">Under 10</option>
                                    <option value="10 - 50">10 - 50</option>
                                    <option value="51 - 100">51 - 100</option>
                                    <option value="101 - 150">101 - 150</option>
                                    <option value="Above 150">Above 150</option>
                                </select>
                            </div>
                            <div className="col-12 col-md-6 position-relative">
                                <span
                                    className="position-absolute text-secondary"
                                    style={{
                                        left: '1.5rem',
                                        top: '50%',
                                        transform: 'translateY(-50%)'
                                    }}
                                >
                                    <FaUserTie />
                                </span>
                                <input
                                    type="text"
                                    placeholder="Customer Name"
                                    className="form-control rounded-1 shadow-none bg-transparent px-3 ps-5"
                                    style={{
                                        height: '50px',
                                        borderColor: COLOR.A,
                                        color: COLOR.A
                                    }}
                                    name="customer_name"
                                    id="customer_name"
                                    value={state.customer_name}
                                    onChange={hdOnChange}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="field-group mb-3">
                        <div className="row">                                    
                            <div className="col-12 col-md-6 mb-3 mb-md-0 position-relative">
                                <span
                                    className="position-absolute text-secondary"
                                    style={{
                                        left: '1.5rem',
                                        top: '50%',
                                        transform: 'translateY(-50%)'
                                    }}
                                >
                                    <FaEnvelope />
                                </span>
                                <input
                                    type="email"
                                    placeholder="Contact Email"
                                    className="form-control rounded-1 shadow-none bg-transparent px-3 ps-5"
                                    style={{
                                        height: '50px',
                                        borderColor: COLOR.A,
                                        color: COLOR.A
                                    }}
                                    name="contact_email"
                                    id="contact_email"
                                    value={state.contact_email}
                                    onChange={hdOnChange}
                                />
                            </div>
                            <div className="col-12 col-md-6 position-relative">
                                <span
                                    className="position-absolute text-secondary"
                                    style={{
                                        left: '1.5rem',
                                        top: '50%',
                                        transform: 'translateY(-50%)'
                                    }}
                                >
                                    <FaMobileAlt />
                                </span>
                                <input
                                    type="text"
                                    placeholder="Contact Phone"
                                    className="form-control rounded-1 shadow-none bg-transparent px-3 ps-5"
                                    style={{
                                        height: '50px',
                                        borderColor: COLOR.A,
                                        color: COLOR.A
                                    }}
                                    name="contact_phone"
                                    id="contact_phone"
                                    value={state.contact_phone}
                                    onChange={hdOnChange}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="field-group mb-4">
                        <div className="row">                                    
                            <div className="col-12 col-md-6 mb-3 mb-md-0 position-relative">
                                <span
                                    className="position-absolute text-secondary"
                                    style={{
                                        left: '1.5rem',
                                        top: '15px'
                                    }}
                                >
                                    <FaMap />
                                </span>
                                <textarea
                                    rows="5"
                                    placeholder="Contact Address"
                                    className="form-control rounded-1 shadow-none bg-transparent px-3 ps-5 py-3"
                                    style={{
                                        borderColor: COLOR.A,
                                        color: COLOR.A,
                                        resize: 'none'
                                    }}
                                    name="contact_address"
                                    id="contact_address"
                                    value={state.contact_address}
                                    onChange={hdOnChange}
                                />
                            </div>
                            <div className="col-12 col-md-6 position-relative">
                                <span
                                    className="position-absolute text-secondary"
                                    style={{
                                        left: '1.5rem',
                                        top: '15px'
                                    }}
                                >
                                    <FaComment />
                                </span>
                                <textarea
                                    rows="5"
                                    placeholder="Message"
                                    className="form-control rounded-1 shadow-none bg-transparent px-3 ps-5 py-3"
                                    style={{
                                        borderColor: COLOR.A,
                                        color: COLOR.A,
                                        resize: 'none'
                                    }}
                                    name="message"
                                    id="message"
                                    value={state.message}
                                    onChange={hdOnChange}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="field-group text-center">
                        <button 
                            type="submit"
                            className="btn px-4 py-2 rounded-2 shadow-sm font-600 text-dark"
                            style={{
                                background: '#ffb81c'
                            }}
                        >
                            Send Message
                        </button>
                    </div>

                    {/* {
                        this.state.mailSent &&

                        <MailsentWrapper
                            className="position-fixed shadow-lg bg-warning"
                        >
                            <div
                                className="position-relative h-100"
                            >
                                <button 
                                    type="button" 
                                    className="btn"
                                    onClick={this.resetForm}
                                    style={{
                                        position: 'absolute',
                                        right: '0',
                                        top: '20px',
                                        zIndex: '99999'
                                    }}
                                >
                                    <span
                                        className="d-block"
                                        style={{
                                            width: '30px',
                                            height: '2px',
                                            background: '#000',
                                            transform: 'rotate(45deg)'
                                        }}
                                    />
                                    <span
                                        className="d-block position-relative"
                                        style={{
                                            width: '30px',
                                            height: '2px',
                                            marginTop: '-2px',
                                            background: '#000',
                                            transform: 'rotate(-45deg)'
                                        }}
                                    />
                                </button>
                                <div 
                                    className="col-11 mx-auto h-100"
                                >
                                    <div
                                        className="d-table w-100 h-100"
                                    >
                                        <div
                                            className="d-table-cell align-middle"
                                        >
                                            <h2
                                                className="mb-2 font-20"
                                                style={{
                                                    letterSpacing: '1px',
                                                    fontSize: '24px',
                                                    color: '#000'
                                                }}
                                            >Thank you</h2>
                                            <p
                                                className="p-font font-12 text-dark mb-0 font-italic"
                                                style={{
                                                    letterSpacing: '0.5px'
                                                }}
                                            >
                                                Your message has been sent.
                                            </p>
                                            <p
                                                className="text-dark mt-4"
                                                style={{
                                                    letterSpacing: '0.5px'
                                                }}
                                            >
                                                We will contact you soon.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </MailsentWrapper>
                    }

                    {
                        this.state.error &&

                        <ErrorWrapper
                            className="position-fixed shadow-lg"
                        >
                            <div
                                className="position-relative h-100"
                            >
                                <button 
                                    type="button" 
                                    className="btn"
                                    onClick={this.resetForm}
                                    style={{
                                        position: 'absolute',
                                        right: '0',
                                        top: '20px',
                                        zIndex: '99999'
                                    }}
                                >
                                    <span
                                        className="d-block"
                                        style={{
                                            width: '30px',
                                            height: '2px',
                                            background: '#000',
                                            transform: 'rotate(45deg)'
                                        }}
                                    />
                                    <span
                                        className="d-block position-relative"
                                        style={{
                                            width: '30px',
                                            height: '2px',
                                            marginTop: '-2px',
                                            background: '#000',
                                            transform: 'rotate(-45deg)'
                                        }}
                                    />
                                </button>
                                <div 
                                    className="col-11 mx-auto h-100"
                                >
                                    <div
                                        className="d-table w-100 h-100"
                                    >
                                        <div
                                            className="d-table-cell align-middle"
                                        >
                                            <h2
                                                className="mb-3 font-20"
                                                style={{
                                                    letterSpacing: '1px',
                                                    fontSize: '24px',
                                                    color: '#e67e22',
                                                    lineHeight: '1.6em'
                                                }}
                                            >
                                                FILL ALL :<br />
                                                Company Name, Company Type,<br />
                                                Company Size, Customer Name,<br />
                                                Contact Email, Contact Phone,<br />
                                                Contact Address, Message !
                                            </h2>
                                            <p
                                                className="p-font font-12 text-dark mb-0 font-italic"
                                                style={{
                                                    letterSpacing: '0.5px'
                                                }}
                                            >
                                                Please try again.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ErrorWrapper>
                    } */}
                    
                </form>
            </div>
        </div>
    )

    return (
        <Layout>
            <Head>
                <title>Enquiry - MySoft</title>
                <meta
                    name="description"
                    content=""
                />
            </Head>

            {pageHeader}
            {formList}
        </Layout>
    )
}

export default Enquiry
