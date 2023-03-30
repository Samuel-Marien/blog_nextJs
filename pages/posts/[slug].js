import React from 'react'

import PostContent from '../../components/posts/post-detail/post-content'
import { getPostData, getPostsFiles } from '../../lib/posts-utils'

const PostDetailPage = (props) => {
  return <PostContent post={props.post} />
}

export async function getStaticProps(context) {
  const { params } = context
  const { slug } = params

  const postData = getPostData(slug)

  return {
    props: {
      post: postData
    },
    revalidate: 180
  }
}

export async function getStaticPaths() {
  const postFilenames = getPostsFiles()
  console.log(postFilenames)

  const slugs = postFilenames.map((filename) => filename.replace(/\.md$/, ''))

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false
  }
}

export default PostDetailPage
