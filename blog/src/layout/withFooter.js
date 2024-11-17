import * as React from "react"
import { AlertProvider } from "@components/Alert/template";
import NavBar from '@components/NavBar/index.js'
import Footer from '@components/FooterBar/index.js';

const containerStyle = {
  paddingTop:'60px',
};

export default function Main({children}){
    return (
        <>
          <AlertProvider>
              <main className='content' style={containerStyle}>
                {children}
              </main>
            <Footer/>
          </AlertProvider>
        </>
      )
}

