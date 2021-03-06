import Head from 'next/head';
import Link from 'next/link';
import colours from '../data/colours.json'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Colours!</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {colours.map(colour => (
        <Link href={`/${colour.name}`}>
          <h2>{colour.name}</h2>
        </Link>
      ))}
    </div>
  )
}
