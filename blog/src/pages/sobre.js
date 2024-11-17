import * as React from 'react'
import { Link } from 'gatsby'

const AboutPage = () => {
  return (
    <main>
      <h1>Sobre</h1>
      <p>Olá! Sou o orgulhoso criador deste site, que construí com Gatsby.</p>
      <Link to="/">Back to Home</Link>

    </main>
  )
}
export const Head = () => <title>About Me</title>
export default AboutPage