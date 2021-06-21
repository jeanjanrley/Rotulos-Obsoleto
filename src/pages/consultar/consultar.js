import {React} from 'react'
import NavBar from '../../compenents/navbar/index'
import './consultar.css'
import Select from '../../compenents/select/index'



export default () => {

    return(
        <div className="global-consultar">
            <NavBar/>
            <div className="container-filters-buscar">
                <div className="filters-buscar">
                    <div className="filtros">
                        <Select categoria="Categoria"/>
                        <Select categoria="Fragrancia"/>
                        <Select categoria="Volume"/>
                        <Select categoria="Res. Tec."/>
                        <Select categoria="Lote"/>
                    </div>
                </div>
            </div>
        </div>
    )
}