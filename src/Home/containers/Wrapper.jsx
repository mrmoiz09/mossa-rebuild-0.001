import React from 'react'
import { previewToaster } from '../../services/CommonFunction'
import Footer from './Footer'
import Header from './Header'


//Home Wrapper
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

export default React.memo(Wrapper)