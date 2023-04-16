import React from 'react'
import Sidenav from './Sidenav'
import Header from './Header'
const Layout = ({ children }) => {
    return (
        <>
            <div className='flex flex-auto h-screen bg-gray-200'>
            <Sidenav/>
                <div className='grow'>
                  <Header/>
                    <div className='m-5'>{children}</div>
                </div>
            </div>
        </>
    )
}

export default Layout