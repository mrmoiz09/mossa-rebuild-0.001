import React from 'react'
import { previewToaster } from '../../services/CommonFunction'
import Footer from './Footer'

const Wrapper = ({children,header}) => {
  return (
     <>
        {previewToaster()}
        {header!=null ? header : ""}
        <main>
        {children}
        </main>
        <Footer/>
     </>
  )
}

export default Wrapper