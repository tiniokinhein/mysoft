import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import { CONTACT } from '../config/contact'
import { COLOR } from '../styles/color'

const ContactUs = () => {
    
    const [p,setP] = React.useState(null)
    const [state,setState] = React.useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        message: ''
    })

    React.useEffect(() => {
        setP(CONTACT)
        window.scrollTo(0,0)
    }, [])

    const hdOnChange = e => {
        setState(value => ({
            ...value,
            [e.target.name]: e.target.value
        }))
    }

    const hdOnSubmit = e => {
        e.preventDefault()
    }

    if(!p) {
        return null
    }

    const pageHeader = (
        <div
            className="position-relative"
            style={{
                background: "url(" + p.image + ") no-repeat center / cover fixed",
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
                        className="m-0 font-bolder text-uppercase text-white"
                        style={{
                            fontSize: '2.5rem',
                            letterSpacing: '0.5px'
                        }}
                    >
                        {p.title}
                    </h4>
                </div>
            </div>
        </div>
    )

    const lists = (
        <div className="py-5 bg-light">
            <div className="container py-5">
                <p 
                    style={{
                        color: COLOR.D
                    }}
                    className="mb-0"
                    dangerouslySetInnerHTML={{__html: p.description}}
                />
            </div>
        </div>
    )

    const formList = (
        <div className="py-5 bg-white">
            <div className="container py-5">
                <div className="col-12 col-md-8 px-0 mx-auto">
                    <form onSubmit={hdOnSubmit} autoComplete="off">
                        <div className="row">
                            <div className="col-12 col-md-6 mb-4 mb-md-0">
                                <div className="form-group mb-4">
                                    <input 
                                        type="text"
                                        name="firstname"
                                        value={state.firstname}
                                        onChange={hdOnChange}
                                        className="form-control rounded-1 shadow-none px-3"
                                        style={{
                                            height: '50px',
                                            borderColor: COLOR.A,
                                            color: COLOR.A
                                        }}
                                        placeholder="First Name"
                                        required
                                    />
                                </div>
                                <div className="form-group mb-4">
                                    <input 
                                        type="text"
                                        name="lastname"
                                        value={state.lastname}
                                        onChange={hdOnChange}
                                        className="form-control rounded-1 shadow-none px-3"
                                        style={{
                                            height: '50px',
                                            borderColor: COLOR.A,
                                            color: COLOR.A
                                        }}
                                        placeholder="Last Name"
                                        required
                                    />
                                </div>
                                <div className="form-group mb-4">
                                    <input 
                                        type="email"
                                        name="email"
                                        value={state.email}
                                        onChange={hdOnChange}
                                        className="form-control rounded-1 shadow-none px-3"
                                        style={{
                                            height: '50px',
                                            borderColor: COLOR.A,
                                            color: COLOR.A
                                        }}
                                        placeholder="Email"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="text"
                                        name="phone"
                                        value={state.phone}
                                        onChange={hdOnChange}
                                        className="form-control rounded-1 shadow-none px-3"
                                        style={{
                                            height: '50px',
                                            borderColor: COLOR.A,
                                            color: COLOR.A
                                        }}
                                        placeholder="Phone Number"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="form-group h-100">
                                    <textarea 
                                        rows="5"
                                        name="message"
                                        value={state.message}
                                        onChange={hdOnChange}
                                        className="form-control rounded-1 shadow-none px-3 h-100 py-3"
                                        style={{
                                            resize: 'none',
                                            borderColor: COLOR.A,
                                            color: COLOR.A
                                        }}
                                        placeholder="Message"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-group mt-4 text-center">
                                    <button 
                                        className="btn px-4 py-2 rounded-2 shadow-sm font-600 text-dark"
                                        style={{
                                            background: '#ffb81c'
                                        }}
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )

    return (
        <Layout>
            <Head>
                <title>Contact Us - MySoft</title>
                <meta
                    name="description"
                    content=""
                />
            </Head>

            {pageHeader}
            {lists}
            {formList}
        </Layout>
    )
}

export default ContactUs
