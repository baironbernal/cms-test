
import Foods from './components/Foods'
import TasteColours from './components/TasteColours'

function App() {

  const tasteColoursData = [
  {
    color: 'red',
    title: 'RED',
    description:
      'Red foods remind us of berries and soft fruits, so we anticipate a sweet taste.',
  },
  {
    color: 'green',
    title: 'GREEN',
    description:
      'Fresh, zingy green colours are reminiscent of unripe fruit, promising sour or acid flavours.',
  },
  {
    color: 'white',
    title: 'WHITE',
    description:
      'White foods evoke memories of salt and salty flavours, driving the expectation of a savoury treat.',
    hasBorder: true,
  },
];
  
  return (
    <>
        <main className='w-full h-auto'>
          <section className='3xl:container max-w-fit md:max-w-[1200px] m-auto lg:p-7'>
            <Foods/>
            <TasteColours title="TASTE THE COLOURS" items={tasteColoursData}/>
          </section>
        </main>
    </>
  )
}

export default App
