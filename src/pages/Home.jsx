import { ContentPage, Footer, Header, PokemonList, Spinner } from '../components'
import { useData } from '../Hooks/useData'

export const Home = () => {
  const { isLoading, pokemonDataList } = useData()

  return (
    <main className='min-h-screen bg-gray-100 transition-colors duration-500 dark:bg-gray-900'>
      <Header />
      <section className='mx-auto flex max-w-[1700px] flex-wrap items-center justify-center gap-5 overflow-hidden py-5 transition-colors duration-500 dark:bg-gray-900'>
        <div className='font-Work animate-text bg-gradient-to-r from-rose-300 via-indigo-500 to-teal-100 bg-clip-text text-center font-semibold text-transparent md:text-4xl'>
        PokeDev developed with React + tailwindcss
        </div>
      </section>

      {isLoading && <Spinner />}

      <ContentPage>
        <PokemonList pokemonDataList={pokemonDataList} />
      </ContentPage>

      <Footer />
    </main>
  )
}
