import Link from 'next/link'
import Image from 'next/image'

import { Nav } from '../styles/base'

export default function NavBar() {
  return (
    <Nav>
      <img
        width='350'
        src='https://res.cloudinary.com/gavmanweb/image/upload/v1616883833/we-call-it-puppy-love/logo_transparent_background.png'
      />
      <div>
        <Link href='/home'>
          <a>Home</a>
        </Link>
        <Link href='/available'>
          <a>Available Puppies</a>
        </Link>
        <Link href='/parents'>
          <a>Parents</a>
        </Link>
        <Link href='/about'>
          <a>About Us</a>
        </Link>
      </div>
    </Nav>
  )
}
