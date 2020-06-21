import React from 'react'
import Link from 'next/link'
import Layout from '../components/reusable/layout/layout'

const Home = () => {
  return (
    <Layout>
      <h1>Welcome to the Emi Calculator App</h1>
      <Link href="/app">Go to Calculator</Link>
    </Layout>
  )
}

export default Home
