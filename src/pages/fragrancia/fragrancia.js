import React from 'react'
import NavBar from '../../compenents/navbar/index'
import Cadastros from '../../compenents/cadastros/index'
import './fragrancia.css'

export default () => {
    return(
        <div className='global-fragrancia'>
            <NavBar></NavBar>
            <div className='sub-global-fragrancia'>
                <Cadastros nome="Fragrancias" placeholder="Digite o nome da fragrancia"/>
            </div>
        </div>
    )
}