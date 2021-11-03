import React,{useState} from 'react'
import './SearchBar.css'

const SearchBar = (porps) => {
    const {handlePokemon} = porps;

    const [pokemon, setpokemon] = useState("pikachu")

    const handleSearch = (e) => {
        if(e.key==="Enter"){
            setpokemon(e.target.value);
            handlePokemon(e.target.value);
        }
    }
    return (
        <div className='containerInput'>
            <input type="text" onKeyDown={handleSearch} placeholder='Name or Number'></input>
        </div>
    )
}

export default SearchBar
