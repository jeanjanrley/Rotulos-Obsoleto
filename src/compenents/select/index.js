import React from 'react'
import './index.css'


export default (props) => {
    const categorias = ["Aromatizantes", "Difusores", "Sabonetes liquidos", "Perfume de Carro", "Escalda pé"]
    const volumes = ["120 ml", "250 ml", "500 ml", "1 l"]
    const fragrancias = ["Flor de laranjeira", "Lavanda", "Bamboo", "Flor de cerejeira", "Cerejeira e aveia"]
    const responsaveis = ["Carmen dias Xavier", "Juranildes Araujo"]
    const lotes = [10000, 20000, 30000, 40000, 50000]

        var options
       
        switch(props.categoria){
            case "Categoria":
                options = categorias
                break;
            case "Volume":
                options = volumes
                break;
            case "Fragrancia":
                options = fragrancias
                break;
            case "Res. Tec.":
                options = responsaveis
                break;
            case "Lote":
                options = lotes
                break;
        }

        const option = options.map((item) => {
            return(
                <option>{item}</option>
            )
        })

       

       return(
        <div className='filtro'>
            <label for="produto">{props.categoria}</label>
            <select id="produto" className='select'>
                {option}
            </select>
        </div>
    )
   }