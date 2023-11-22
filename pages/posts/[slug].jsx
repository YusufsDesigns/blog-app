import React from 'react'
import PostContent from '../../components/posts/post-detail/PostContent'
import { getPostsData, getPostsFiles } from '../../lib/posts-util'
import Head from 'next/head'

function PostDetailPage(props) {
    return (
        <>
            <Head>
                <title>{props.post.title}</title>
                <meta name='description' content={props.post.description} />
            </Head>
            <PostContent post={props.post} />
        </>
    )
}

export async function getStaticProps(context){
    const { params } = context
    const { slug } = params

    const postData = getPostsData(slug)

    return {
        props: {
            post: postData
        },
        revalidate: 600
    }
}

export async function getStaticPaths(){
    const postFiles = getPostsFiles()
    const slugs = postFiles.map(file => file.replace(/\.md$/, ''))
    const paths = slugs.map(slug => ({params: {slug: slug}}))
    return {
        paths: paths,
        fallback: false
    }
}

export default PostDetailPage