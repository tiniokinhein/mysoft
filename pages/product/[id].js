import Head from 'next/head'
import React from 'react'
import Layout from '../../components/Layout'
import { PRODUCTS } from '../../config/products'
import { COLOR } from '../../styles/color'

const ProductDetail = ({ product }) => {

    const [p,setP] = React.useState(null)

    React.useEffect(() => {
        setP(PRODUCTS[product.id])
        window.scrollTo(0,0)
    }, [product.id])

    if(!p) {
        return null
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
                        className="m-0 font-bolder text-dark"
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
        <div key={p.slug} className="py-5">
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 col-md-6 mb-4 mb-md-0 pe-3 pe-5">
                        <img 
                            src={p.image} 
                            alt="" 
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
                            {p.title}
                        </h4>
                        <p
                            style={{
                                color: COLOR.D
                            }}
                            dangerouslySetInnerHTML={{__html: p.description}}
                        />
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <Layout>
            <Head>
                <title>{p.title} - MySoft</title>
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

ProductDetail.getInitialProps = (context) => {
    const { id } = context.query
    return {
        product: {
            id
        }
    }
}


export default ProductDetail
