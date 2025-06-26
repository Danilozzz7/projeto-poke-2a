import {Routes, Route} from 'react-router-dom'
import Home from './Home'
import PokeFlex from './PokeFlex'
import PokeGrid from './PokeGrid'
import Menu from './Menu'
import ViaCep from './ViaCep'

const App = () => {

  return (
    <Routes>
      <Route index="/" element={<Menu/>} />
      <Route path="Home/" element={<Home/>} />
      <Route path="PokeFlex/" element={<PokeFlex/>} />
      <Route path="Pokegrid/" element={<PokeGrid/>} />
      <Route path="ViaCep" element={<ViaCep/>} />
      </Routes>
  )
}

export default App