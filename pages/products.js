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

    return (
        <Layout>
            <Head>
                <title>Products - MySoft</title>
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
                        Our Products
                    </h4>
                    
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
