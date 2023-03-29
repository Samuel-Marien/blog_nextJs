import React from 'react'

import AllPosts from '../../components/posts/all-posts'

const DUMMY_POSTS = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'getting started with nextJs',
    image: 'getting-started-nextjs.png',
    excerpt:
      "The React Framework for the Web Used by some of the world's largest companies, Next.js enables you to create full-stack web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.",
    date: '2022-02-10'
  },
  {
    slug: 'getting-started-with-nextjs2',
    title: 'getting started with reactjs',
    image: 'getting-started-nextjs.png',
    excerpt:
      "The React Framework for the Web Used by some of the world's largest companies, Next.js enables you to create full-stack web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.",
    date: '2022-02-10'
  },
  {
    slug: 'getting-started-with-nextjs3',
    title: 'getting started with nextJs',
    image: 'getting-started-nextjs.png',
    excerpt:
      "The React Framework for the Web Used by some of the world's largest companies, Next.js enables you to create full-stack web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.",
    date: '2022-02-10'
  },
  {
    slug: 'getting-started-with-nextjs4',
    title: 'getting started with reactjs2',
    image: 'getting-started-nextjs.png',
    excerpt:
      "The React Framework for the Web Used by some of the world's largest companies, Next.js enables you to create full-stack web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.",
    date: '2022-02-10'
  }
]

const AllPostsPage = () => {
  return <AllPosts posts={DUMMY_POSTS} />
}

export default AllPostsPage
