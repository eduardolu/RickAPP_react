export default function  Characters(props) {
    const {caracters, setCaracters}=props;
    const resetCaracters=() =>{
        setCaracters(null);
    }
  return (

    <div className="characters">
        <h1>Personajes</h1>
        <span className="back-home" onClick={resetCaracters}>Volver al menu</span>
        <div className="container-characters">
            { caracters.map((caracter,index)=>(
                <div className="character-container" key={index}>
                    <div>
                        <img src={caracter.image} alt={caracter.name}/>
                    </div>
                    <div>
                        <h3>{caracter.name}</h3>
                        <h6>
                            {caracter.status === "Alive" ? (
                                <>
                                <span className="alive" />
                                Alive
                                </>
                            ):(
                                <>
                                <span className="dead" />
                                Dead
                                </>
                            )}
                        </h6>
                        <p>
                            <span className="text-grey">Episodios: </span>
                            <span>{caracter.episode.length}</span>
                        </p>
                        <p>
                            <span className="text-grey">Especie: </span>
                            <span>{caracter.species}</span>
                        </p>
                    </div>
                </div>
            ))}
        </div>
        <span className="back-home" onClick={resetCaracters}>Volver al menu</span>
    </div>
  )
}
