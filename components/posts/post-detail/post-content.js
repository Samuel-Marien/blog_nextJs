import React from 'react'

import classes from './post-content.module.css'
import PostHeader from './post-header'

const DUMMY_POST = {
  slug: 'getting-started-with-nextJs',
  title: 'getting started with nextJs',
  image: 'getting-started-nextjs.png',
  excerpt:
    "The React Framework for the Web Used by some of the world's largest companies, Next.js enables you to create full-stack web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.",
  date: '2022-02-10',
  content: '# This is a first post'
}

const PostContent = () => {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`
  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      {DUMMY_POST.content}
    </article>
  )
}

export default PostContent
