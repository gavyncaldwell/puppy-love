import Link from 'next/link'
import Image from 'next/image'

import { Nav } from '../styles/base'

export default function NavBar() {
  return (
    <Nav>
      <Link href='/'>
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
    </Nav>
  )
}
