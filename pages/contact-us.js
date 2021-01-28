import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import { CONTACT } from '../config/contact'
import { COLOR } from '../styles/color'

const ContactUs = () => {
    
    const [p,setP] = React.useState(null)

    React.useEffect(() => {
        setP(CONTACT)
        window.scrollTo(0,0)
    }, [])

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
        </Layout>
    )
}

export default ContactUs
