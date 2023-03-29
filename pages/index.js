import React from 'react'

import Hero from '../components/home-page/hero'
import FeaturedPosts from '../components/home-page/featured-posts'

import { getFeaturedPosts } from '../lib/posts-utils'

const HomePage = (props) => {
  return (
    <>
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
