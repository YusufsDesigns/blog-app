import React from 'react'
import ContactForm from '../components/contact/ContactForm'
import Head from 'next/head'

function ContactPage() {
    return (
        <>
            <Head>
                <title>Contact Me</title>
                <meta name='description' content="Send messages" />
            </Head>
            <ContactForm />
        </>
    )
}

export default ContactPage