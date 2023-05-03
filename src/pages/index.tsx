import Link from 'next/link'
import { useRouter } from 'next/router'

function Home() {

  const router = useRouter()

  const handleClick = () => {
    router.push('/product')
  }

  return (
    <>
      <h1>Home page</h1>
      <Link href='/blog'>
        Blog
      </Link>
      <button onClick={handleClick}>
        Place order
      </button>
    </>
  )
}

export default Home
