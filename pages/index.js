import Link from 'next/link'

export default function Page(props) {
  return (
    <>
      <p>index page</p>
      <Link href='/blog/first'>
        <a>to /blog/first</a>
      </Link>
      <br />
       <Link href='/blog/second'>
        <a>to /blog/second</a>
      </Link>
      <br />
    </>
  )
}
