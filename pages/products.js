import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Layout from '../components/Layout'
import { PRODUCTS } from '../config/products'


const products = () => {

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
                        Products
                    </h4>
                </div>
            </div>
        </div>
    )

    return (
        <Layout>
            <Head>
                <title>Products - MySoft</title>
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
                                    className="col-6 col-md-4 px-0 overflow-hidden position-relative"
                                    key={p.slug}
                                >
                                    <Link 
                                        href="/product/[id]" 
                                        as={`/product/${p.id}`} 
                                    >
                                        <a className="text-decoration-none text-dark img-pHover">
                                            <img 
                                                src={p.image}
                                                alt={p.title}
                                                className="w-100"
                                            />
                                            <h4
                                                className="my-0 font-600 text-center position-absolute"
                                                style={{
                                                    letterSpacing: '-1px',
                                                    fontSize: '1.3rem',
                                                    bottom: '30px',
                                                    left: 0,
                                                    right: 0
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

export default products
