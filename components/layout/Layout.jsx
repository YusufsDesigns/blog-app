import React from 'react'
import Navigation from './Navigation'

function Layout(props) {
    return (
        <>
            <Navigation />
            <main>{props.children}</main>
        </>
    )
}

export default Layout