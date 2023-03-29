import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import classes from './post-item.module.css'

const PostItem = (props) => {
  const { title, image, excerpt, date, slug } = props.post

  const formatedDate = new Date(date).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })

  const imagePath = `/images/posts/${slug}/${image}`
  const linkPath = `/posts/${slug}`

  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <div>
          <Image
            priority
            src={imagePath}
            className={classes.image}
            alt={title}
            width={300}
            height={200}
          />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <time>{formatedDate}</time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  )
}

export default PostItem
