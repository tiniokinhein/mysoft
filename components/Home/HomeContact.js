import React from 'react'
import Iframe from 'react-iframe'
import { COLOR } from '../../styles/color'

const HomeContact = () => {

    const [state,setState] = React.useState({
        fullname: '',
        phone: '',
        email: '',
        message: ''
    })

    const handleOnChange = e => {
        setState({
            [e.target.name]: e.target.value
        })
    }

    const handleOnSubmit = e => {
        e.preventDefault()

    }

    const formList = (
        <form autoComplete="off" onSubmit={handleOnSubmit}>
            <div className="form-group mb-4">
                <input 
                    type="text"
                    name="fullname"
                    value={state.fullname}
                    onChange={handleOnChange}
                    placeholder="Full Name"
                    className="form-control bg-transparent text-light border-bottom border-secondary border-top-0 border-start-0 border-end-0 rounded-0 shadow-none px-0"
                    required
                    style={{
                        height: '50px'
                    }}
                />
            </div>
            <div className="form-group mb-4">
                <input 
                    type="text"
                    name="phone"
                    value={state.phone}
                    onChange={handleOnChange}
                    placeholder="Phone"
                    className="form-control bg-transparent text-light border-bottom border-secondary border-top-0 border-start-0 border-end-0 rounded-0 shadow-none px-0"
                    required
                    style={{
                        height: '50px'
                    }}
                />
            </div>
            <div className="form-group mb-4">
                <input 
                    type="email"
                    name="email"
                    value={state.email}
                    onChange={handleOnChange}
                    placeholder="Email"
                    className="form-control bg-transparent text-light border-bottom border-secondary border-top-0 border-start-0 border-end-0 rounded-0 shadow-none px-0"
                    required
                    style={{
                        height: '50px'
                    }}
                />
            </div>
            <div className="form-group mb-5">
                <textarea
                    rows="5"
                    name="message"
                    value={state.message}
                    onChange={handleOnChange}
                    placeholder="Enter Your Messages"
                    className="form-control bg-transparent text-light border-bottom border-secondary border-top-0 border-start-0 border-end-0 rounded-0 shadow-none px-0"
                    required
                />
            </div>
            <div className="form-group">
                <button 
                    className="btn px-4 py-2 text-decoration-none rounded-2 shadow-sm font-600 text-dark"
                    style={{
                        backgroundColor: '#ffb81c'
                    }}
                >
                    Submit
                </button>
            </div>
        </form>
    )

    return (
        <div className="row mx-0">
            <div className="col-12 col-md-6 col-lg-7 px-0">
                <Iframe
                    url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13449781.52264158!2d88.11988207177235!3d18.03633271558975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c194eb70b00001%3A0xb2a1f5694971b1b6!2sMICT%20Park%20Main%20Building!5e0!3m2!1sen!2smm!4v1579164872881!5m2!1sen!2smm"
                    width="100%"
                    height="100%"
                    className="location-class border-0"
                    display="block"
                    position="relative" 
                />
            </div>
            <div className="col-12 col-md-6 col-lg-5 p-5 bg-dark">
                <h4
                    className="mb-4 mt-0 font-bold text-light"
                    style={{
                        letterSpacing: '-1px',
                        fontSize: '2rem'
                    }}
                >
                    Contact Us
                </h4>

                {formList}
            </div>
        </div>
    )
}

export default HomeContact
