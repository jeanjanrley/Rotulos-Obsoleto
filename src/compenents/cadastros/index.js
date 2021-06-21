import './index.css'


export default (props) => {

    const fragrancias = ["flor de laranjeira", "Arruda", "Lavanda", "Flor de cerejeira", "Pitanga", "Chá verde", "Trousseau", "Bamboo"]

    const ItemList = fragrancias.map((item) => {
        
            return(
                <div className="item-list">
                    <p>{item}</p>
                    <button>editar</button>
                    <button>excluir</button>
                </div>
            )
        }
        
    )

    return(
        <>
            <div className='global-cadastro'> 
                <div className="title-cadastro" >{props.nome}</div>
                <div className="body-cadastro">
                    <input id="input-cadastro" className='input-cadastro' type="text" placeholder={props.placeholder}></input>
                    <button className="button-cadastro" type="button">adcionar</button>
                </div>
            </div>
            <div className='global-cadastro lista'>
                {ItemList}
            </div>
        </>
    )
}