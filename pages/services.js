import Link from 'next/link'
import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import { PRODUCTS } from '../config/products'

const Services = () => {

    const [items,setItems] = React.useState([])

    React.useEffect(() => {
        setItems(PRODUCTS)
    }, [])

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
                        Services
                    </h4>
                </div>
            </div>
        </div>
    )

    return (
        <Layout>
            <Head>
                <title>Services - MySoft</title>
                <meta
                    name="description"
                    content=""
                />
            </Head>

            {pageHeader}

            <div className="py-5 bg-white">
                <div className="container py-5">

                    <div className="row">
                        {
                            items.map((p) => (
                                <div 
                                    className="col-6 col-md-3 mb-3"
                                    key={p.slug}
                                >
                                    <Link href="/service/[id]" as={`/service/${p.id}`}>
                                        <a className="text-decoration-none text-secondary img-hover">
                                            <img 
                                                src={p.image}
                                                alt={p.title}
                                                className="w-100"
                                            />
                                            <h4
                                                className="my-4 font-600 text-center"
                                                style={{
                                                    letterSpacing: '-1px',
                                                    fontSize: '1.1rem'
                                                }}
                                            >
                                                {p.title}
                                            </h4>
                                        </a>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>

                </div>
            </div>
           
        </Layout>
    )
}

export default Services
