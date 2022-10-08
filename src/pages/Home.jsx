import { ContentPage, Footer, Header, PokemonList, Spinner } from '../components'
import { useData } from '../Hooks/useData'

export const Home = () => {
  const { isLoading, pokemonDataList } = useData()

  return (
    <main className='min-h-screen bg-gray-100 transition-colors duration-500 dark:bg-gray-900'>
      <Header />
      <section className='mx-auto flex max-w-[1700px] flex-wrap items-center justify-center gap-5 overflow-hidden py-5 transition-colors duration-500 dark:bg-gray-900'>
        <p>Hola mundo xd</p>
      </section>

      {isLoading && <Spinner />}

      <ContentPage>
        <PokemonList pokemonDataList={pokemonDataList} />
      </ContentPage>

      <Footer />
    </main>
  )
}
