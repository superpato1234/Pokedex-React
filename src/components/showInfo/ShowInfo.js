import React,{useState,useEffect} from 'react'
import './ShowInfo.css'

const ShowInfo = (props) => {

    const [pokeType, setPokeType] = useState('')
    const {pokeInfo} = props;
    let url = pokeInfo?.sprites;
    url===undefined?url="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png":url=pokeInfo.sprites.front_default;

    const type = () => {
        if(pokeInfo?.types!==undefined){
            let types=''
            for(const type in pokeInfo.types){
                types+=pokeInfo.types[type].type.name+' '
            }
            setPokeType(types);
        }
        else{
            setPokeType('none');
        }
    }

    useEffect(()=>{
        type();
    },[pokeInfo])
    return (
        <div>
            <p className='NamePoke'>{pokeInfo.name}</p>
            <div className='ContainerImg'>
                <img src={url} alt="" className='ImagePoke'></img>
                <p className='stats'>{pokeType}</p>
            </div>
        </div>
    )
}

export default ShowInfo
