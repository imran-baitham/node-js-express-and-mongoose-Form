import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Node Js | app</title>
        <meta name="author" content="gbrant" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full">
        <Link href={'/account/login'}>
          <button>Login</button>
        </Link>
      </main>
    </>
  )
}
