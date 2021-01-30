import React from 'react'
import Link from 'next/link'
import { COLOR } from '../../styles/color'
import { ABOUT } from '../../config/about'

const HomeAbout = () => {

    const [p,setP] = React.useState(null)

    React.useEffect(() => {
        setP(ABOUT)
    }, [])

    const listData = p ? (
        <div className="row">
            <div className="col-12 col-md-6 mb-4 mb-md-0 pe-3 pe-md-5">
                <img 
                    src={p.image}
                    alt="About"
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
                    dangerouslySetInnerHTML={{__html: p.overview}}
                />
                <Link href="/about-us">
                    <a
                        className="d-inline-block mt-3 px-5 py-2 text-light text-decoration-none rounded-0 shadow-sm"
                        style={{
                            background: COLOR.A
                        }}
                    >
                        Read more
                    </a>
                </Link>
            </div>
        </div>
    ) : null

    return (
        <div className="py-5">
            <div className="container py-5">
                {listData}
            </div>
        </div>
    )
}

export default HomeAbout
