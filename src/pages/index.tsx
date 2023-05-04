import Head from 'next/head'
import MainLayout from '../layouts/mainLayout'
import Gallery from '@/components/gallery'
import { InferGetServerSidePropsType } from 'next'
import { fetcher } from '@/utils/methods'
import { Provider } from 'react-redux'
import { store } from '@/lib/redux/store'

export default function Home({
      cards,
    }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <Provider store={store}>
      <MainLayout>
        <Head>
          <title>MtgDeckBuilder - Home</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Gallery cards={cards} />
      </MainLayout>
    </Provider>
  )
}

export async function getServerSideProps() {
  // Forth: Version sans axios qui a assez gros sans pour autant bcp simplifier
  const res = await fetcher<CardAPIData>(
    'https://api.magicthegathering.io/v1/cards'
  )
  const cards = res.cards
    .filter((cardData) => cardData.imageUrl)
    .map((c) => ({ id: c.id, name: c.name, imageUrl: c.imageUrl }))

  return {
    props: {
      cards,
    },
  }
}
