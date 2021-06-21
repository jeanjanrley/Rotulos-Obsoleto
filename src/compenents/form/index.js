import React from 'react'
import './index.css'


export default () => {  
    
    const handleSubmit = ( e) => {
        e.preventDefault();
    }
    
    const rotulo = {}
        const cadastrarRotulo = async () => {
            const url = 'http://localhost:3000/cadastrar/rotulo'
            const options = {method: 'POST', headers: { 'Host': 'localhost:3001', 'Accept': 'application/json','User-Agent': 'insomnia/2021.3.0', 'Content-Type': 'application/json;charset=UTF-8', 'Content-Length': 19}, body: JSON.stringify(rotulo)}
            await fetch(url, options)
        }
    
    return(
        <div className="global">
            <div id="formArea" className='form-area'>
                <form onSubmit={handleSubmit} className="form">
                    <div className="filters">
                        <input onChange={(v) => {rotulo.categoria = v.target.value}} id="Categoria" name="Categoria" className="input-model" type="text" placeholder="Categoria"/>
                        <input onChange={(v) => {rotulo.fragrancia = v.target.value}} id="Fragrancia" name="Fragrancia" className="input-model" type="text" placeholder="Fragrancia"/>
                        <input onChange={(v) => {rotulo.volume = v.target.value}} id="Volume name=" name="Volume" className="input-model" type="text" placeholder="Volume"/>
                        <input onChange={(v) => {rotulo.responsavelTecnico = v.target.value}} id="Responsavel" name="Responsavel" className="input-model" type="text" placeholder="Responsavel Tecnico"/>
                        <input onChange={(v) => {rotulo.dataDeFabricacao = v.target.value }} id="data" name="data" className="input-model" type="date"/>
                    </div>
                    <textarea onChange={(v) => {rotulo.contraRotulo = v.target.value }} className="text-area itens" placeholder="Contrarotulo"></textarea>
                    <button id="button" className="button" className="enviar-etiqueta" onClick={cadastrarRotulo}>Enviar etiqueta</button>
                </form>
            </div>
        </div>
    )
}