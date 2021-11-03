import React,{useState,useEffect} from 'react';
import SearchBar from './components/searchBar/SearchBar';
import ShowInfo from './components/showInfo/ShowInfo';
import ControlBar from './components/controlBar/ControlBar';
import './App.css';

function App() {
  const [Pokemon, setPokemon] = useState('1');
  const [error, seterror] = useState(false)
  const [objPokemon, setobjPokemon] = useState({})
  const url=`https://pokeapi.co/api/v2/pokemon/${Pokemon}`
  useEffect(() => {
    fetch(url)
      .then(res=>res.json())
      .then(data=>{setobjPokemon(data)})
      .catch(()=>{handleError()})
  }, [url])
  
  const getPokemon = (poke) =>{
    setPokemon(poke)
  }
  const previusPokemon = () => {
    if(objPokemon.id>1){
      setPokemon(objPokemon.id-1);
    }
  }
  const nextPokemon = () => {
    if(objPokemon.id<898){
      setPokemon(objPokemon.id+1);
    }
  }
  const handleError = () => {
    seterror(true)
    setTimeout(() => {
      seterror(false)
    }, 4000);
    
  }

  return (
    <div className="App">
      <SearchBar handlePokemon={getPokemon} />
      <p className='MessageError'>{error?'lo sentimos algo salio mal, intentalo de nuevo o confirma los datos':''}</p>
      <ShowInfo pokeInfo={objPokemon} />
      <ControlBar handlePrevius={previusPokemon} handleNext={nextPokemon}/>
    </div>
  );
}

export default App;
