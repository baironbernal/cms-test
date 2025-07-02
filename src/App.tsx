
import Foods from './components/Foods'
import TasteColours from './components/TasteColours'

function App() {
  
  return (
    <>
        <main className='bg-[var(--bg-dark)] w-full h-screen'>
          <section className='container m-auto'>
            <Foods/>
            <TasteColours/>

          </section>
        </main>
    </>
  )
}

export default App
