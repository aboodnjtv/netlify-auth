import Link from 'next/link'
import Image from 'next/image'
// import { useContext } from 'react'
// import AuthContext from '../stores/authContext'

export default function Navbar() {
//   const user = useContext(AuthContext)
//   console.log(user)

  return (
    <div className="container">
      <nav>
        <Image alt ="" src="/rupee.png" width={50} height={48} />
        <h1>Gaming Vibes</h1>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/guides">Guides</Link></li>
        </ul>
      </nav>
      <div className="banner">
        <Image alt =""  src="/banner.png" width={966} height={276} />
      </div>
    </div>
  )
}