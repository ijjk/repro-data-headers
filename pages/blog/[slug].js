export default function Page(props) {
  return (
    <>
      <p>blog page</p>
      <p>{JSON.stringify(props)}</p>
    </>
  )
}

export function getStaticPaths() {
  return {
    paths: [
      '/blog/first',
      '/blog/second'
    ],
    fallback: false
  }
}

export function getStaticProps({ params }) {
  return {
    props: {
      hello: 'world',
      params,
    }
  }
}
