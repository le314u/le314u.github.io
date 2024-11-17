import React from 'react';

function Footer(){

  const fixedBottom = {
    color:'red',
    position:'sticky',
    top:'100vh',
  };


  return (
  <>
  <footer className="bg-body-tertiary text-center w-100" style={fixedBottom}>
    <div className="container p-4">
      <section className="mb-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
          repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam eum
          harum corrupti dicta, aliquam sequi voluptate quas.
        </p>
      </section>    
    </div>
    <div className="text-center p-3">
      By: <a className="text-reset fw-bold" href="https://314-u.com/">314-u.com</a>
    </div>
  </footer>
  </>
  )
}
export default Footer;

