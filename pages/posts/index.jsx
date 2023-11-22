import React from 'react'
import AllPosts from '../../components/posts/AllPosts'
import { getAllPosts } from '../../lib/posts-util'
import Head from 'next/head'


function AllPostsPage(props) {
    return (
        <>  
            <Head>
                <title>All Posts</title>
                <meta name='description' content="A list of posts" />
            </Head>
            <AllPosts posts={props.posts} />
        </>
    ) 
}

export async function getStaticProps(){
    const allPosts = getAllPosts()

    return {
        props: {
            posts: allPosts
        }
    }
}

export default AllPostsPage