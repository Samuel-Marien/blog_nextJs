import React from 'react'
import Head from 'next/head'

import ContactForm from '../components/contact/contact-form'

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact me</title>
        <meta name="description" content="form to contact me" />
      </Head>
      <ContactForm />
    </>
  )
}

export default ContactPage
