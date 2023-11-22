import ReactMarkdown from 'react-markdown'

import classes from './PostContent.module.css'
import PostHeader from './PostHeader'
import Image from 'next/image'

function PostContent(props) {
    const { post } = props
    const imagePath = `/images/posts/${post.image}`

    const customRenderes = {
        img(image){
            return <Image src={`${image.src}`} alt={image.alt} width={600} height={300} layout='responsive' />
        },
        
    }

    return (
        <article className={classes.content}>
            <PostHeader title={post.title} image={imagePath} />
            <ReactMarkdown components={customRenderes}>{post.content}</ReactMarkdown>
        </article>
    )
}

export default PostContent