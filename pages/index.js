import Head from 'next/head'
import { NextSeo } from 'next-seo'
import React from 'react'
import HomeAbout from '../components/Home/HomeAbout'
import HomeContact from '../components/Home/HomeContact'
import HomeFull from '../components/Home/HomeFull'
import ProductLists from '../components/Home/ProductLists'
import ServiceLists from '../components/Home/ServiceLists'
import Layout from '../components/Layout'

const Home = () => {

  React.useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  return (
    <Layout>
      <Head>
        <title>MySoft - System and Solutions</title>
        <meta
          name="description"
          content="My Soft is system and solutions in Myanmar."
        />
      </Head>

      <NextSeo
        title="MySoft - System and Solutions"
        description="My Soft is system and solutions in Myanmar."
        canonical={() => window !== undefined ? window.location.href : undefined}
        openGraph={{
          url: () => window !== undefined ? window.location.href : undefined,
          title: 'MySoft - System and Solutions',
          description: 'My Soft is system and solutions in Myanmar.',
          images: [
            {
              url: '/assets/images/homeFull.jpg',
              width: 900,
              height: 800,
              alt: 'MySoft - System and Solutions',
            },
            { url: '/assets/images/homeFull.jpg' }
          ],
          site_name: 'MySoft - System and Solutions',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />

      <div>
        <HomeFull />
        <HomeAbout />

        <div className="py-5 bg-light">
          <div className="container py-4">
            <h4
              className="mb-4 mt-0 font-bold text-dark text-center"
              style={{
                letterSpacing: '-1px',
                fontSize: '2rem'
              }}
            >
              Our Products
            </h4>
            <ProductLists />
          </div>
        </div>

        <div className="py-5 bg-white">
          <div className="container pt-4">
            <h4
              className="mb-4 mt-0 font-bold text-dark text-center"
              style={{
                letterSpacing: '-1px',
                fontSize: '2rem'
              }}
            >
              Our Services
            </h4>
            <ServiceLists />
          </div>
        </div>

        <div className="py-5 bg-light">
          <div className="container py-5">
            <HomeContact />
          </div>
        </div>

      </div>
    </Layout>
  )
}

export default Home
