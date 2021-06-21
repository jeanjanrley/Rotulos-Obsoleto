import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'


export default () => {
    return(
        <div className="nav-bar">
            <div className='lista-de-menus'>
                <li className='li' ><Link to='consultar'>consultar etiqueta</Link></li>
                <li className='li' ><Link to='/'>cad. etiqueta</Link></li>
                <li className='li' ><Link to='categoria'>cad. categoria</Link></li>
                <li className='li' ><Link to='fragrancia'>cad. fragrancia</Link></li>
                <li className='li' ><Link to='medida'>cad. medida</Link></li>
                <li className='li' ><Link to='/contra-rotoulo'>cad. contra rotulo</Link></li>
                <li className='li' ><Link to='/responsavel'>cad. responsavel tecnico(a)</Link></li>
                <li><Link to='/codigo-de-barras'>cad. codigo de barras</Link></li>
            </div>
        </div>
    )
}