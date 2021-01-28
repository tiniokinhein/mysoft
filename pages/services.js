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

    return (
        <Layout>
            <Head>
                <title>Services - MySoft</title>
                <meta
                    name="description"
                    content=""
                />
            </Head>

            <div className="py-5 bg-light">
                <div className="container py-5">
                    <h4
                        className="mb-4 mt-0 font-bold text-dark"
                        style={{
                            letterSpacing: '-1px',
                            fontSize: '2rem'
                        }}
                    >
                        Services
                    </h4>

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
