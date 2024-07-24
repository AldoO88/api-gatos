import './App.css'
import { Otro } from './components/Otro'
import { useCatFact } from './hooks/useCatFact'
import { useCatimage } from './hooks/useCatImage'

export const App = () => {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatimage({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>Get new fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={`${imageUrl}`} alt={`Image extracted using the first three words for ${fact}`} />}

      <Otro />
    </main>
  )
}
