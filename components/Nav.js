import Link from 'next/link'

import { Nav } from '../styles/base'

export default function NavBar() {
  return (
    <Nav>
      <Link href='/home'>
        <a>Home</a>
      </Link>
      <Link href='/available'>
        <a>Available Pupies</a>
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
