import Head from 'next/head'
import React from 'react'
import Layout from '../components/Layout'
import { COLOR } from '../styles/color'
import { ABOUT } from '../config/about'

const AboutUs = () => {

    const [p,setP] = React.useState(null)

    React.useEffect(() => {
        setP(ABOUT)
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
                        About Us
                    </h4>
                </div>
            </div>
        </div>
    )

    const mission = (
        <div className="py-5">
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 col-md-6 mb-4 mb-md-0 pe-3 pe-md-5">
                        <img 
                            src={p.mission.image}
                            alt="Mission"
                            className="w-100 h-100"
                            style={{
                                objectFit: 'cover'
                            }}
                        />
                    </div>
                    <div className="col-12 col-md-6">
                        <h4
                            className="mb-4 mt-0 font-bold text-dark"
                            style={{
                                letterSpacing: '-1px',
                                fontSize: '2rem'
                            }}
                        >
                            {p.mission.title}
                        </h4>
                        <p 
                            style={{
                                color: COLOR.D
                            }}
                            className="mb-0"
                            dangerouslySetInnerHTML={{__html: p.mission.description}}
                        />
                    </div>
                </div>
            </div>
        </div>
    )

    const vision = (
        <div className="pb-5">
            <div className="container pb-5">
                <div className="row">
                    <div className="col-12 col-md-6 mb-4 mb-md-0 order-1 order-md-2 ps-3 ps-md-5">
                        <img 
                            src={p.vision.image}
                            alt="Mission"
                            className="w-100 h-100"
                            style={{
                                objectFit: 'cover'
                            }}
                        />
                    </div>
                    <div className="col-12 col-md-6 order-2 order-md-1">
                        <h4
                            className="mb-4 mt-0 font-bold text-dark"
                            style={{
                                letterSpacing: '-1px',
                                fontSize: '2rem'
                            }}
                        >
                            {p.vision.title}
                        </h4>
                        <p 
                            style={{
                                color: COLOR.D
                            }}
                            className="mb-0"
                            dangerouslySetInnerHTML={{__html: p.vision.description}}
                        />
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <Layout>
            <Head>
                <title>About Us - MySoft</title>
                <meta
                    name="description"
                    content=""
                />
            </Head>

            {pageHeader}
            {mission}
            {vision}
        </Layout>
    )
}

export default AboutUs
