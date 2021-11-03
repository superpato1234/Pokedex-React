import React from 'react'
import './ShowInfo.css'

const ShowInfo = (props) => {

    const {pokeInfo} = props;
    let url = pokeInfo?.sprites;
    url===undefined?url="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png":url=pokeInfo.sprites.front_default;

    const type = () => {
        if(pokeInfo?.types!==undefined){
            let types=''
            for(const type in pokeInfo.types){
                types+=pokeInfo.types[type].type.name+' '
            }
            return <p className='stats'>type: {types}</p>
        }
        else{
            return <p className='stats'>none</p>
        }
    }

    return (
        <div>
            <p className='NamePoke'>{pokeInfo.name}</p>
            <div className='ContainerImg'>
                <img src={url} alt="" className='ImagePoke'></img>
                {type()}
            </div>
        </div>
    )
}

export default ShowInfo
