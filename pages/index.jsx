import React from 'react'
import Hero from '../components/home-page/Hero'
import FeaturedPosts from '../components/home-page/FeaturedPosts'
import { getFeaturedPosts } from '../lib/posts-util'
import Head from 'next/head'

function HomePage(props) {
    return (
        <>
            <Head>
                <title>Yusuf's Blog</title>
                <meta name='description' content="I love web development" />
            </Head>
            <Hero />
            <FeaturedPosts posts={props.posts} />
        </>
    )
}

export async function getStaticProps(){
    const featuredPosts = getFeaturedPosts()

    return{
        props: {
            posts: featuredPosts
        }
    }
}

export default HomePage
