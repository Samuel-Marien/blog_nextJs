import React from 'react'
import Head from 'next/head'

import AllPosts from '../../components/posts/all-posts'
import { getAllPosts } from '../../lib/posts-utils'

const AllPostsPage = (props) => {
  return (
    <>
      <Head>
        <title>All my posts here</title>
        <meta
          name="description"
          content="A list of all programmming and tutorial"
        />
      </Head>
      <AllPosts posts={props.posts} />
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts()

  return {
    props: {
      posts: allPosts
    }
  }
}

export default AllPostsPage
