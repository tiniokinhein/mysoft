import Link from 'next/link'
import React from 'react'
import { PRODUCTS } from '../../config/products'

const ProductLists = () => {

    const [items,setItems] = React.useState([])

    React.useEffect(() => {
        setItems(PRODUCTS.slice(0,6))
    }, [])

    return (
        <div className="row mx-0">
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
    )
}

export default ProductLists
