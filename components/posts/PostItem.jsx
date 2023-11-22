import Image from "next/image"
import Link from "next/link"
import classes from './PostItem.module.css'


function PostItem(props) {
    const { title, image, description, date, slug } = props.post

    console.log(props);

    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })

    const imagePath = `/images/posts/${image}`
    const linkPath = `/posts/${slug}`

    return (
        <li className={classes.post}>
            <Link href={linkPath}>
                <div className={classes.image}>
                    <Image src={imagePath} alt={title} width={300} height={200} layout='responsive' />
                </div>
                <div className={classes.content}>
                    <h3>{title}</h3>
                    <time>{formattedDate}</time>
                    <p>{description}</p>
                </div>
            </Link>
        </li>
    )
}

export default PostItem