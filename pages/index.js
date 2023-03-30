import React from 'react'
import Head from 'next/head'

import Hero from '../components/home-page/hero'
import FeaturedPosts from '../components/home-page/featured-posts'

import { getFeaturedPosts } from '../lib/posts-utils'

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>Welcome to my blog!</title>
        <meta
          name="description"
          content="I post about programming and web dev"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  )
}

export function getStaticProps() {
  const featuredPost = getFeaturedPosts()

  return {
    props: {
      posts: featuredPost
    }
  }
}

export default HomePage
