import React from 'react'
import Sidenav from './Sidenav'
import Header from './Header'
const Layout = ({ children }) => {
    return (
        <>
            <div className='flex flex-auto h-screen bg-[#FCFBFC] '>
            <Sidenav/>
                <div className='grow'>
                  <Header/>
                    <div className='m-4'>{children}</div>
                </div>
            </div>
        </>
    )
}

export default Layout